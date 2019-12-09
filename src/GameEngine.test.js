import React from 'react';
import { mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import ReactDOM from 'react-dom';
import 'jest-canvas-mock';

import GameEngine from './GameEngine';
import Game from './Game';


it('renders Game and its Engine', () => {
  const wrapper = mount(<GameEngine />);
  expect(wrapper.find(GameEngine)).toHaveLength(1);
  expect(wrapper.find(Game)).toHaveLength(1);
  expect(wrapper.find('p')).toHaveLength(3);
});