import React from 'react';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });


import ReactDOM from 'react-dom';
import 'jest-canvas-mock';

import Game from './Game';
import Canvas from './Canvas';

it('renders Game without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders canvas inside game without crashing', () => {
  const wrapper = shallow(<Game />);
  expect(wrapper.find(Canvas)).toHaveLength(1);
});
