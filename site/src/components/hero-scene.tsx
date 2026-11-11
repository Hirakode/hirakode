"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "./motion";
import { BrandMark } from "./icons";

export default function HeroScene() {
  const host = useRef<HTMLDivElement>(null);
  const animationControl = useRef<((pause: boolean) => void) | null>(null);
  const { paused, reduced } = useMotionPreference();
  const motionPaused = useRef(paused || reduced);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let disposed = false;
    let disposeScene: (() => void) | undefined;

    async function createScene() {
      const [THREE, { RoomEnvironment }] = await Promise.all([import("three"), import("three/addons/environments/RoomEnvironment.js")]);
      if (disposed || !container) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" }); }
      catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setClearColor(0x111013, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      container.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
      camera.position.set(0, 0, 8.8);
      const pmrem = new THREE.PMREMGenerator(renderer);
      const environmentScene = new RoomEnvironment();
      const environment = pmrem.fromScene(environmentScene, 0.04);
      scene.environment = environment.texture;
      environmentScene.dispose();

      const shape = new THREE.Shape();
      const coordinates = [[-0.2, 1.5], [-1.5, 0.75], [-1.5, -0.75], [-0.2, -1.5], [-0.2, -0.88], [-0.96, -0.43], [-0.96, 0.43], [-0.2, 0.88]];
      coordinates.forEach(([x, y], index) => index === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y));
      shape.closePath();
      const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.46, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: 0.09, bevelThickness: 0.09, curveSegments: 16 });
      geometry.translate(0, 0, -0.23);
      const silver = new THREE.MeshPhysicalMaterial({ color: "#C0C4CA", metalness: 1, roughness: 0.19, clearcoat: 0.25, clearcoatRoughness: 0.25 });
      const gold = new THREE.MeshPhysicalMaterial({ color: "#D2AE62", metalness: 1, roughness: 0.22, clearcoat: 0.25, clearcoatRoughness: 0.2 });
      const burgundy = new THREE.MeshStandardMaterial({ color: "#7D1A33", metalness: 0.08, roughness: 0.65 });
      const left = new THREE.Mesh(geometry, silver);
      const right = new THREE.Mesh(geometry, gold);
      right.rotation.z = Math.PI;
      left.position.x = -0.11;
      right.position.x = 0.11;
      const barGeometry = new THREE.BoxGeometry(0.7, 0.22, 0.35);
      const bar = new THREE.Mesh(barGeometry, burgundy);
      const group = new THREE.Group();
      group.add(left, right, bar);
      scene.add(group);
      const rim = new THREE.DirectionalLight("#F5F0EE", 3);
      rim.position.set(-3, 4, 3);
      scene.add(rim);
      const warm = new THREE.DirectionalLight("#D2AE62", 1);
      warm.position.set(4, -1, 2);
      scene.add(warm);

      const pointer = { x: 0, y: 0 };
      let visible = true;
      let stopped = motionPaused.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let elapsed = 0;
      let previousTime = 0;
      const render = (time = 0) => {
        const delta = previousTime ? Math.min(time - previousTime, 32) : 0;
        previousTime = time;
        if (!stopped) elapsed += delta * 0.001;
        const targetX = 0.27 + Math.sin(elapsed * 0.27) * 0.12 + pointer.y * 0.16;
        const targetY = -0.42 + Math.sin(elapsed * 0.22) * 0.25 + pointer.x * 0.25;
        group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.04);
        group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.04);
        group.rotation.z = -0.23 + Math.sin(elapsed * 0.18) * 0.09;
        group.position.y = Math.sin(elapsed * 0.45) * 0.08;
        right.position.z = 0.11 + Math.sin(elapsed * 0.4) * 0.08;
        renderer.render(scene, camera);
      };
      group.rotation.set(0.27, -0.42, -0.23);
      const updateLoop = () => {
        previousTime = 0;
        renderer.setAnimationLoop(visible && !stopped && !document.hidden ? render : null);
        if (visible && !document.hidden) render();
      };
      animationControl.current = pause => { stopped = pause; updateLoop(); };
      const onPointer = (event: PointerEvent) => {
        if (stopped || event.pointerType !== "mouse") return;
        const rect = container.getBoundingClientRect();
        pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
        pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
      };
      const onLeave = () => { pointer.x = 0; pointer.y = 0; };
      const onVisibility = () => updateLoop();
      const resize = new ResizeObserver(() => {
        const { width, height } = container.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.position.z = camera.aspect < 1 ? 10.5 : 8.8;
        camera.updateProjectionMatrix();
        render();
      });
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updateLoop(); });
      const onContextLost = (event: Event) => { event.preventDefault(); renderer.setAnimationLoop(null); setReady(false); };
      renderer.domElement.addEventListener("webglcontextlost", onContextLost);
      container.addEventListener("pointermove", onPointer);
      container.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      resize.observe(container);
      observer.observe(container);
      render();
      updateLoop();
      setReady(true);
      disposeScene = () => {
        renderer.setAnimationLoop(null);
        animationControl.current = null;
        resize.disconnect(); observer.disconnect();
        container.removeEventListener("pointermove", onPointer);
        container.removeEventListener("pointerleave", onLeave);
        document.removeEventListener("visibilitychange", onVisibility);
        renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
        geometry.dispose(); barGeometry.dispose(); silver.dispose(); gold.dispose(); burgundy.dispose();
        environment.dispose(); pmrem.dispose(); renderer.dispose(); renderer.domElement.remove();
      };
    }
    void createScene().catch(() => { /* The accessible static brand mark remains visible. */ });
    return () => { disposed = true; disposeScene?.(); };
  }, []);

  useEffect(() => { motionPaused.current = paused || reduced; animationControl.current?.(paused || reduced); }, [paused, reduced]);

  return <div className={`hero-scene ${ready ? "scene-ready" : ""}`} aria-hidden="true"><div className="scene-fallback"><BrandMark/></div><div ref={host} className="scene-canvas"/></div>;
}
