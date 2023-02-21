/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import Home from './src/screens/Home';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="홈">
        <Tab.Screen name="내집찾기" component={Home} />
        <Tab.Screen name="머물자리" component={Home} />
        <Tab.Screen name="홈" component={Home} />
        <Tab.Screen name="하울링" component={Home} />
        <Tab.Screen name="마이페이지" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
