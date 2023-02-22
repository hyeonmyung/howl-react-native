import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BuyScreen from '../../screens/BuyScreen';

export enum BuyScreens {
  BuyHome = 'BuyHome',
  BuyDetail = 'BuyDetail',
}

export type BuyStackParamList = {
  BuyHome: undefined;
  BuyDetail: undefined;
};

const BuyStack = createStackNavigator<BuyStackParamList>();
const BuyStackNavigator: React.FunctionComponent = () => {
  return (
    <BuyStack.Navigator>
      <BuyStack.Screen
        name={BuyScreens.BuyHome}
        component={BuyScreen}
        options={{headerShown: false}}
      />
    </BuyStack.Navigator>
  );
};
export default BuyStackNavigator;
