'use client';
export default function Error({reset}:{reset:()=>void}){return <main style={{padding:60}}><h1>No pudimos abrir esta selección.</h1><p>Vuelve a intentarlo para seguir explorando.</p><button onClick={reset}>Reintentar</button></main>}
