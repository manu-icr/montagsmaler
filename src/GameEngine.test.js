import React from 'react';
import { mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import ReactDOM from 'react-dom';
import 'jest-canvas-mock';

import GameEngine from './GameEngine';


it('contains default context values', () => {
  const wrapper = mount(<GameEngine />);
  console.log(wrapper);
  expect(wrapper.props.round).toBe(0);  
  expect(wrapper.props.points).toBe(0);  
});