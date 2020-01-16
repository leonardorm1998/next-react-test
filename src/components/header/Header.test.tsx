import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

import Header from './'

Enzyme.configure({ adapter: new Adapter() })

const Component = <Header />
const wrapper = shallow(Component)

describe('Should render Header component', () => {
  it('#Should have title', () => {
    const title = wrapper.find('h1')

    expect(title.length).toBe(1)
    expect(title.text()).toEqual('Header Example')
  })

  it('should render correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
