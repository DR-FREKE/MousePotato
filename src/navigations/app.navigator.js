import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './maintab.navigator';

const {Navigator, Screen} = createNativeStackNavigator();

const AudioNavigator = () => (
  <Navigator screenOptions={{headerShown: false}} initialRouteName="home">
    <Screen name="home" component={MainTab} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <AudioNavigator />
  </NavigationContainer>
);

export default AppNavigator;
