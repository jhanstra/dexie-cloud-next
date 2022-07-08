import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') return null
  if (typeof window.indexedDB === 'undefined') return null
  return <Component {...pageProps} />
}

export default MyApp
