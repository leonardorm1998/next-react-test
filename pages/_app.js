import React from 'react';
import Head from 'next/head';
import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
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
