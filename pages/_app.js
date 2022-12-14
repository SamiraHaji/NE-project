import Layout from '../components/Layout'
import '../styles/globals.css'
import Contact from './contact'

function MyApp({ Component, pageProps }) {
  return <div>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </div>
}

export default MyApp
