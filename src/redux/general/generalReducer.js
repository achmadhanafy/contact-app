import {configInitialState} from './generalnitialState';
import * as CONST from './generalConstant';

const generalInitialState = {
  ...configInitialState,
  action: '',
};

export const generalReducer = (state = generalInitialState, action) => {
  const {payload, type} = action;
  const actions = {
    [CONST.SET_COLOR_SCHEME]: () => ({
      ...state,
      colorScheme: payload,
      action: type,
    }),

    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
