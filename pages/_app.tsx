import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper';
import initsStore from '../src/redux/store';

interface IProps {
  store: any;
}
class MyApp extends App<IProps> {
  public render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(initsStore)(MyApp);
