import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import "../styles/styles.css"

export default () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1>Welcome to Next.js!</h1>
      <p>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
      <div className='row'>
        <div className='mt-r-05'>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className='mt-r-05'>
          <Link href="/news">
            <a>News</a>
          </Link>
        </div>
      </div>
    </div>
  </>
)
