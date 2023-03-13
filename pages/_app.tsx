import type { AppProps } from 'next/app'

import AppContainer from '../features/app/containers/AppContainers'

import '../theme/styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppContainer>
    <Component {...pageProps} />
  </AppContainer>
)


export default MyApp
