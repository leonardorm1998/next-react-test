import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import About from '../pages/about';

Enzyme.configure({ adapter: new Adapter() })

const Component = <About />;
const wrapper = shallow(Component);

it('#Should render Component', () => {
  const title = wrapper.find('h1');
  const content = wrapper.find('p');

  expect(title.length).toBe(1);
  expect(title.children).toBe('Lorem Ipsum');

  expect(content.length).toBe(1);
  expect(content.children).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam lacus, placerat vel enim ut, posuere vestibulum');
});
