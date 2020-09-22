import '../globals.scss'
import { AppProps } from 'next/app'
import { ContextProvider } from '../utils/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
