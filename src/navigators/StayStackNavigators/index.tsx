import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StayScreen from '../../screens/StayScreen';
import StayDetailScreen from '../../screens/StayScreen/detail';
import {NavigationContainer} from '@react-navigation/native';

export enum StayScreens {
  StayHome = 'StayHome',
  StayDetail = 'StayDetail',
}

export type StayStackParamList = {
  StayHome: undefined;
  StayDetail: undefined;
};

const StayStack = createStackNavigator<StayStackParamList>();
const StayStackNavigator: React.FunctionComponent = () => {
  return (
    <StayStack.Navigator>
      <StayStack.Screen
        name={StayScreens.StayHome}
        component={StayScreen}
        options={{headerShown: false}}
      />
    </StayStack.Navigator>
  );
};
export default StayStackNavigator;
