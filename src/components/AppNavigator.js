import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Screens/Home'
import DetailScreen from './Screens/Details'

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
          
        />
        <Stack.Screen 
            name="Details" 
            component={DetailScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}