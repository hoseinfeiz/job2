import { Provider } from 'react-redux'
import App from 'next/app'
import store from '@/configs/store'
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store
  const pageProps = await App.getInitialProps(appContext)

  return {
    ...pageProps,
  }
}

export default MyApp
