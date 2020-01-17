import React from 'react'

import CounterContainer from '@Redux/modules/Counter'

// import imgGoogle from '@Images/img-google-1.jpg'

import '@Styles/main.css'

const About = () => {
  return (
    <>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam
        lacus, placerat vel enim ut, posuere vestibulum
      </p>
      {/* <img src={imgGoogle} alt="img-google" width="300" height="300" /> */}
      <CounterContainer />
    </>
  )
}

export default About
