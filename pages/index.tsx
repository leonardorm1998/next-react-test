import Link from 'next/link'
import React from 'react'

import '@Styles/main.css'

export default () => (
  <div>
    <h1>Welcome to Next.js!</h1>
    <p>
      To get started, edit <code>pages/index.js</code> and save to reload.
    </p>
    <div className="row">
      <div className="mt-r-05">
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className="mt-r-05">
        <Link href="/news">
          <a>News</a>
        </Link>
      </div>
    </div>
  </div>
)
