import 'jest-styled-components'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

import Header from './'

import { SHeader } from './styled'

import imgGoogle from '@Images/img-google-1.jpg'
import Circle from '@Images/circle.svg'


Enzyme.configure({ adapter: new Adapter() })

const Component = <Header />
const wrapper = shallow(Component)

describe('Should render Header component', () => {
  it('#Component should has as wrapper SHeader', () => {
    const styledWrapper = wrapper.find(SHeader)
    const tree = renderer.create(<SHeader />).toJSON()
    expect(styledWrapper.length).toBe(1)
    expect(tree).toHaveStyleRule('background', 'red')
  })

  it('#Should have title', () => {
    const title = wrapper.find('h1')
    expect(title.length).toBe(1)
    expect(title.text()).toEqual('Header Example')
  })

  it('#Should render an image of google ', () => {
    const img = wrapper.find('img')
    expect(img.length).toBe(1)
    expect(img.prop('src')).toEqual(imgGoogle);
    expect(img.prop('height')).toEqual('200');
    expect(img.prop('width')).toEqual('200');
  })

  it('#Should render a svg circle ', () => {
    const svg = wrapper.find(Circle)
    expect(svg.length).toBe(1)
  })

  it('#should render correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
