import React from 'react';
import MainStack from './app/routing/MainStack';
import store from './app/redux/store';
import {Provider} from 'react-redux';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

export default App;
