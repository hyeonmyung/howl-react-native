import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StayScreen from '../../screens/StayScreen';
import StayDetailScreen from '../../screens/StayDetailScreen';

export enum StayScreens {
  StayHome = 'StayHome',
  StayDetail = 'StayDetail',
}

export type StayStackParamList = {
  StayHome: undefined;
  StayDetail: undefined;
};

const StayStack = createStackNavigator<StayStackParamList>();
const HomeStackNavigator: React.FunctionComponent = () => {
  return (
    <StayStack.Navigator>
      <StayStack.Screen name={StayScreens.StayHome} component={StayScreen} />
      <StayStack.Screen
        name={StayScreens.StayDetail}
        component={StayDetailScreen}
      />
    </StayStack.Navigator>
  );
};
export default HomeStackNavigator;
