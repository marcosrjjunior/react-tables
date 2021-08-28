import '../app.scss'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.groupCollapsed(metric.name)
  console.log(metric)
  console.groupEnd()
}
