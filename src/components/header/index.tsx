import React from 'react'

import imgGoogle from '@Images/img-google-1.jpg'
import Circle from '@Images/circle.svg'

import { SHeader } from './styled'

export default () => (
  <SHeader>
    <h1>Header Example</h1>
    <img src={imgGoogle} width="200" height="200" />
    <Circle />
  </SHeader>
)
