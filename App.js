import React from 'react';
import Navigator from './src/navigation/Navigator';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './src/redux/reducer';
import saga from './src/redux/saga';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(saga);

function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <Toast />
    </Provider>
  );
}

export default App;
