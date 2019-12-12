import React from 'react';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import ReactDOM from 'react-dom';


import StartGameButton from "./StartGameButton";


it('executes click function', () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow((<StartGameButton startGame={mockCallBack} />));
  wrapper.find('button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);

});

it('is visible and vanishes after click', () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow((<StartGameButton startGame={mockCallBack} />));
  expect(wrapper.find('button')).toHaveLength(1);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('button')).toHaveLength(0);
})