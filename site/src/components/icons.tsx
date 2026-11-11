export function Arrow({ className = "", diagonal = false }: { className?: string; diagonal?: boolean }) {
  return <svg aria-hidden="true" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function BrandMark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 72 64" fill="none" aria-hidden="true"><path d="m31 6-26 15v22l26 15V45L16 36v-8l15-9V6Z" fill="currentColor"/><path d="m41 6 26 15v22L41 58V45l15-9v-8l-15-9V6Z" fill="#D2AE62"/><path d="M27 28h18v8H27z" fill="#B8818F"/></svg>;
}

export function Wordmark({ large = false }: { large?: boolean }) {
  return <span className={`wordmark ${large ? "wordmark-large" : ""}`}><BrandMark className="wordmark-symbol" /><span><span className="wordmark-name">Hira<span>kode</span></span><span className="wordmark-subtitle">solutions</span></span></span>;
}
