import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '@Redux/store'

const store = configureStore()

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
