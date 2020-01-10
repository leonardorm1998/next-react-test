import App from 'next/app';
import Head from 'next/head';
import React from 'react';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next.js PWA</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
