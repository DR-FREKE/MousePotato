import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';
import {
  GlobeIcon,
  HomeIcon,
  NotifyIcon,
  ProfileIcon,
} from '../components/Widgets/Icons';
import * as screen from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

const LocationScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h6">This is Location Screen</Text>
  </Layout>
);

const ProfileScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h6">This is Profile Screen</Text>
  </Layout>
);

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    style={{height: '10%', paddingBottom: 20}}
    indicatorStyle={{backgroundColor: '#FB4445'}}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={HomeIcon} />
    <BottomNavigationTab icon={GlobeIcon} />
    <BottomNavigationTab icon={NotifyIcon} />
    <BottomNavigationTab icon={ProfileIcon} />
  </BottomNavigation>
);

const AudioTabNavigator = () => (
  <Navigator
    screenOptions={({route}) => ({
      headerShown: false,
    })}
    tabBar={props => <BottomTabBar {...props} />}
    initialRouteName="homeTab"
    backBehavior="none">
    <Screen name="homeTab" component={screen.HomePage} />
    <Screen name="globeTab" component={LocationScreen} />
    <Screen name="notifyTab" component={ProfileScreen} />
    <Screen name="profileTab" component={ProfileScreen} />
  </Navigator>
);

export default AudioTabNavigator;
