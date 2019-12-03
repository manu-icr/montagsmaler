import React from 'react';
import { mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import ReactDOM from 'react-dom';
import 'jest-canvas-mock';


import TextBlock from "./TextBlock";


it('renders TextBlock without crashing', () => {
  const wrapper = mount(<TextBlock strings={["Test"]} />);
  expect(wrapper.find('.className')).toBeTruthy();
});