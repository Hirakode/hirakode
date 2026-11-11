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
      const [THREE, { toCreasedNormals }, { RoundedBoxGeometry }, { RectAreaLightUniformsLib }] = await Promise.all([
        import("three"),
        import("three/addons/utils/BufferGeometryUtils.js"),
        import("three/addons/geometries/RoundedBoxGeometry.js"),
        import("three/addons/lights/RectAreaLightUniformsLib.js"),
      ]);
      if (disposed || !container) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" }); }
      catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x111013, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.85;
      container.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
      camera.position.set(0, 0, 8.8);
      const pmrem = new THREE.PMREMGenerator(renderer);
      // Bake studio softboxes once: the moving metal reflects them without extra per-frame lights.
      const environmentScene = new THREE.Scene();
      environmentScene.background = new THREE.Color("#25262C");
      const softboxGeometry = new THREE.PlaneGeometry(1, 1);
      const softboxes = [
        { position: [-3.5, -1, 5], scale: [2, 6], color: "#F4F6FF", intensity: 2 },
        { position: [-6, -3, 2], scale: [3, 4], color: "#F4F6FF", intensity: 2 },
        { position: [4, 1, 3], scale: [1.2, 6], color: "#FFF1D8", intensity: 5 },
        { position: [0, 5, -2], scale: [5, 2], color: "#FFFFFF", intensity: 8 },
        { position: [-1, -4, 2], scale: [6, 0.8], color: "#E0E8FF", intensity: 3 },
        { position: [-5, 0, -3], scale: [2, 5], color: "#E8EDFF", intensity: 4 },
      ].map(({ position, scale, color, intensity }) => {
        const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity) });
        const panel = new THREE.Mesh(softboxGeometry, material);
        panel.position.set(position[0], position[1], position[2]);
        panel.scale.set(scale[0], scale[1], 1);
        panel.lookAt(0, 0, 0);
        environmentScene.add(panel);
        return panel;
      });
      const environment = pmrem.fromScene(environmentScene, 0.035);
      scene.environment = environment.texture;
      softboxes.forEach(panel => panel.material.dispose());
      softboxGeometry.dispose();

      // Directional microgrooves share one small, mipmapped texture across the brushed faces.
      const grainSize = 256;
      const grainData = new Uint8Array(grainSize * grainSize * 4);
      for (let y = 0; y < grainSize; y++) {
        for (let x = 0; x < grainSize; x++) {
          const value = Math.round(205 + 30 * Math.sin(y * y * 127.1) + 6 * Math.sin(x * 0.1 + y * 1.1));
          const offset = (y * grainSize + x) * 4;
          grainData[offset] = grainData[offset + 1] = grainData[offset + 2] = value;
          grainData[offset + 3] = 255;
        }
      }
      const grain = new THREE.DataTexture(grainData, grainSize, grainSize);
      grain.wrapS = grain.wrapT = THREE.RepeatWrapping;
      grain.repeat.set(0.65, 2);
      grain.magFilter = THREE.LinearFilter;
      grain.minFilter = THREE.LinearMipmapLinearFilter;
      grain.generateMipmaps = true;
      grain.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      grain.needsUpdate = true;

      const shape = new THREE.Shape();
      const coordinates = [[-0.2, 1.5], [-1.5, 0.75], [-1.5, -0.75], [-0.2, -1.5], [-0.2, -0.88], [-0.96, -0.43], [-0.96, 0.43], [-0.2, 0.88]];
      coordinates.forEach(([x, y], index) => index === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y));
      shape.closePath();
      const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.46, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.065, bevelThickness: 0.065, curveSegments: 16 });
      toCreasedNormals(geometry, 0.4);
      geometry.translate(0, 0, -0.23);
      const silver = new THREE.MeshPhysicalMaterial({ color: "#D6DBE3", metalness: 1, roughness: 0.36, roughnessMap: grain, bumpMap: grain, bumpScale: 0.00035, anisotropy: 0.35 });
      const gold = new THREE.MeshPhysicalMaterial({ color: "#E7BE75", metalness: 1, roughness: 0.34, roughnessMap: grain, bumpMap: grain, bumpScale: 0.00035, anisotropy: 0.35 });
      const silverEdge = new THREE.MeshStandardMaterial({ color: "#D6DBE3", metalness: 1, roughness: 0.14 });
      const goldEdge = new THREE.MeshStandardMaterial({ color: "#E7BE75", metalness: 1, roughness: 0.14 });
      const burgundy = new THREE.MeshPhysicalMaterial({ color: "#8F2342", metalness: 0.8, roughness: 0.27, clearcoat: 0.35, clearcoatRoughness: 0.2 });
      const left = new THREE.Mesh(geometry, [silver, silverEdge]);
      const right = new THREE.Mesh(geometry, [gold, goldEdge]);
      right.rotation.z = Math.PI;
      left.position.x = -0.11;
      right.position.x = 0.11;
      const barGeometry = new RoundedBoxGeometry(0.7, 0.22, 0.35, 3, 0.025);
      const bar = new THREE.Mesh(barGeometry, burgundy);
      const group = new THREE.Group();
      group.add(left, right, bar);
      scene.add(group);
      RectAreaLightUniformsLib.init();
      const key = new THREE.RectAreaLight("#F4F6FF", 2, 1.4, 4);
      key.position.set(-3, -1, 3);
      key.lookAt(0, 0, 0);
      scene.add(key);
      const strip = new THREE.RectAreaLight("#FFE8C2", 5, 0.8, 4);
      strip.position.set(3, 1, 2);
      strip.lookAt(0, 0, 0);
      scene.add(strip);
      const rim = new THREE.DirectionalLight("#F5F0EE", 1.5);
      rim.position.set(-3, 4, 3);
      scene.add(rim);
      const warm = new THREE.DirectionalLight("#FFE6B6", 0.8);
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
        geometry.dispose(); barGeometry.dispose(); grain.dispose();
        silver.dispose(); gold.dispose(); silverEdge.dispose(); goldEdge.dispose(); burgundy.dispose();
        environment.dispose(); pmrem.dispose(); renderer.dispose(); renderer.domElement.remove();
      };
    }
    void createScene().catch(() => { /* The accessible static brand mark remains visible. */ });
    return () => { disposed = true; disposeScene?.(); };
  }, []);

  useEffect(() => { motionPaused.current = paused || reduced; animationControl.current?.(paused || reduced); }, [paused, reduced]);

  return <div className={`hero-scene ${ready ? "scene-ready" : ""}`} aria-hidden="true"><div className="scene-fallback"><BrandMark/></div><div ref={host} className="scene-canvas"/></div>;
}
