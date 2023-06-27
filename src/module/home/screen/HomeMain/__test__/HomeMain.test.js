import React from 'react';
import HomeMain from '..';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {storeMock} from '../../../../../util/jest';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useIsFocused: jest.fn(() => ({})),
  };
});
jest.mock('react-native-gesture-handler', () => {});

describe('<HomeMain/>', () => {
  test('should search bar result is match and correct', () => {
    const store = storeMock;
    const test = render(
      <Provider store={store}>
        <HomeMain />
      </Provider>,
    );
  });
});
