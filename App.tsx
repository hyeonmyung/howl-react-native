import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStackNavigator from './src/navigators/HomeStackNavigators';
import StayStackNavigator from './src/navigators/StayStackNavigators';
import 'react-native-gesture-handler';
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="홈"
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="홈" component={HomeStackNavigator} />
          <Tab.Screen name="머물자리" component={StayStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
