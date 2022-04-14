/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AssetIconsPack} from './src/utils/icons/assets.icon';
import {StatusBar, Text, View} from 'react-native';
import {default as theme} from './src/utils/theme.json';
import AppNavigator from './src/navigations/app.navigator';

const AppState = ({mode, ...props}) => {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

const App = props => <AppState {...props} />;

export default App;
