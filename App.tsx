import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStackNavigator from './src/navigators/HomeStackNavigators';
import StayStackNavigator from './src/navigators/StayStackNavigators';
import HowlingStackNavigator from './src/navigators/HowlingStackNavigators';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StayDetailScreen from './src/screens/StayScreen/detail';
import HowlingDetailScreen from './src/screens/HowlingScreen/detail';
const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="홈" screenOptions={{headerShown: false}}>
      <Tab.Screen name="머물자리" component={StayStackNavigator} />
      <Tab.Screen name="홈" component={HomeStackNavigator} />
      <Tab.Screen name="하울링" component={HowlingStackNavigator} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StayDetail"
            component={StayDetailScreen}
            options={{title: `머물자리 상세`}}
          />
          <Stack.Screen
            name="HowlingDetail"
            component={HowlingDetailScreen}
            options={{title: `하울링 상세`}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
