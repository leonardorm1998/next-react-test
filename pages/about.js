import React from 'react'
import Head from 'next/head'

import imgGoogle from '../public/icons/img-google-1.jpg'; // Tell Webpack this JS file uses this image

import "../styles/styles.css";

const About = () => (
  <>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam lacus, placerat vel enim ut, posuere vestibulum sapien. Nullam congue pellentesque libero, sit amet elementum lectus aliquet at. Integer luctus massa nec tempus commodo. Vestibulum et tellus imperdiet, ultricies tellus eget, lacinia massa. Aliquam condimentum tempor turpis, a consectetur mauris congue interdum. Maecenas vitae nunc faucibus, consectetur leo at, posuere ante. Sed vulputate, leo vitae tristique volutpat, augue dolor cursus nulla, ac imperdiet quam tellus rhoncus sem. Fusce semper neque vel maximus sagittis. Mauris sed tortor elementum, consequat erat mattis, eleifend dui. Nunc eu libero a tellus dapibus blandit et vitae quam.
      </p>
      <p>
        Cras sapien odio, sagittis non luctus vitae, iaculis eu urna. Pellentesque sodales nibh vel mauris maximus congue. Donec sed rutrum massa. Nam quis quam ut tellus pellentesque efficitur. In maximus, diam sit amet dictum fringilla, metus ligula hendrerit sem, eu interdum metus leo ut diam. Ut eu auctor arcu. Donec feugiat vulputate massa vel vestibulum. Nullam molestie ligula ut nisi hendrerit, quis semper nulla vulputate. Phasellus id accumsan libero, ut vulputate ipsum. Nullam vel eros magna. Suspendisse malesuada mauris a facilisis suscipit. Morbi id elit magna.
      </p>
      <b>
        Generated 2 paragraphs, 188 words, 1287 bytes of Lorem Ipsum
      </b>
      <div>
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
        <img src={imgGoogle} alt="img-google" width="300" height="300" />
      </div>
    </div>
  </>
)

export default About
