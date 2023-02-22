import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HowlingDetailScreen from '../../screens/HowlingScreen/detail';
import HowlingScreen from '../../screens/HowlingScreen';
export enum HowlingScreens {
  HowlingHome = 'HowlingHome',
  HowlingDetail = 'HowlingDetail',
}

export type HowlingStackParamList = {
  HowlingHome: undefined;
  HowlingDetail: undefined;
};

const HowlingStack = createStackNavigator<HowlingStackParamList>();
const HowlingStackNavigator: React.FunctionComponent = () => {
  return (
    <HowlingStack.Navigator>
      <HowlingStack.Screen
        name={HowlingScreens.HowlingHome}
        component={HowlingScreen}
        options={{headerShown: false}}
      />
    </HowlingStack.Navigator>
  );
};
export default HowlingStackNavigator;
