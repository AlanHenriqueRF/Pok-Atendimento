import Reset from '../src/styles/reset.css'
import type { AppProps } from 'next/app'
import MainLayout from '../src/components/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Reset></Reset>
      <Component {...pageProps} />
    </MainLayout>
  )
}
