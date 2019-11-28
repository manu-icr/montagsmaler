import React from 'react';
import { mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });


import ReactDOM from 'react-dom';
import 'jest-canvas-mock';

import App from './App';
import Welcome from './Welcome';
import Game from './Game';
import Score from './Score';


it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains Welcome page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Welcome)).toHaveLength(1);
  expect(wrapper.find(Game)).toHaveLength(0);

});

it('does not contain Welcome/Game but Score page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/score']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Score)).toHaveLength(1);
  expect(wrapper.find(Welcome)).toHaveLength(0);
  expect(wrapper.find(Game)).toHaveLength(0);

});