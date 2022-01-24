import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
