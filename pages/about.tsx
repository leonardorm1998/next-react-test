import React from 'react';

import CounterContainer from '../src/redux/modules/Counter';

import imgGoogle from '../public/images/img-google-1.jpg';

import '../public/styles/main.css';

const About = () => {
  return (
    <>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus diam lacus, placerat vel enim ut, posuere vestibulum
      </p>
      <img src={imgGoogle} alt='img-google' width='300' height='300' />
      <CounterContainer />
    </>
  );
};

export default About;
