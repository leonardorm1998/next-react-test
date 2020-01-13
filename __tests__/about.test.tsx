import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';

import About from '../pages/about';

import imgGoogle from '../public/images/img-google-1.jpg';

Enzyme.configure({ adapter: new Adapter() })

const Component = <About />;
const wrapper = shallow(Component);

describe('Should render about component', () => {

  it('#Should have title', () => {
    const title = wrapper.find('h1');

    expect(title.length).toBe(1);
    expect(title.text()).toEqual('Lorem Ipsum');
  });

  it('#Should have content', () => {
    const content = wrapper.find('p');

    expect(content.length).toBe(1);
    expect(content.text()).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam lacus, placerat vel enim ut, posuere vestibulum');
  });

  it('#Should have an image', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toEqual(imgGoogle);
    expect(img.prop('width')).toEqual('300');
    expect(img.prop('height')).toEqual('300');
    expect(img.prop('alt')).toEqual('img-google');
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<About />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
