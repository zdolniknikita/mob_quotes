/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useReducer } from 'react';
import { StatusBar } from 'react-native';

import { INITIAL_STATE, reducer } from './src/reducers/quotes.reducer'
import AppNavigator from './src/components/AppNavigator'

export const AppContext = React.createContext()

const App = () => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <AppContext.Provider value={{ state, dispatch}}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </AppContext.Provider>
  );
};

export default App;
