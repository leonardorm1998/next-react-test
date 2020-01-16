import App from 'next/app'
import React from 'react'
import { Provider, ProviderProps } from 'react-redux'
import { AnyAction } from 'redux'

import withRedux from 'next-redux-wrapper'
import initsStore from '../src/redux/store'

class MyApp extends App<Readonly<ProviderProps<AnyAction>>> {
  public render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(initsStore)(MyApp)
