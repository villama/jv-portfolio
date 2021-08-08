import { AppProps } from 'next/app'
import 'src/styles/_globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
