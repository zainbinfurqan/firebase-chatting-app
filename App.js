/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ReactNative from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Screen_1 from './src/pages/Screen-1'
import Screen_2 from './src/pages/Screen-2'
import Screen_3 from './src/pages/Screen-3'
import Registartion from './src/pages/Registration'
import Login from './src/pages/Login'
import UsersList from './src/pages/UseList'
import store, { persistor } from './src/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navigation from './src/navigation/Auth'
import Auth from './src/navigation/Auth'
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Auth />
          {/* <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={'Registartion'}>
              <Stack.Screen name="Registartion" component={Registartion} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="UsersList" component={UsersList} />
            </Stack.Navigator>
          </NavigationContainer> */}
        </PersistGate>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default App;
