import React from 'react';

import imgGoogle from '../public/icons/img-google-1.jpg';

import '../styles/styles.css';

export default () => (
  <>
    <h1>Lorem Ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus diam lacus, placerat vel enim ut, posuere vestibulum
    </p>
    <img src={imgGoogle} alt="img-google" width="300" height="300" />
  </>
);
