import '@/styles/main.css'
import Nav from '../../components/shared/nav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>

  )
}
