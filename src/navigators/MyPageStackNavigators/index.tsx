import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageScreen from '../../screens/MyPageScreen';

export enum MyPageScreens {
  MyPageHome = 'MyPageHome',
  MyPageDetail = 'MyPageDetail',
}

export type MyPageStackParamList = {
  MyPageHome: undefined;
  MyPageDetail: undefined;
};

const MyPageStack = createStackNavigator<MyPageStackParamList>();
const MyPageStackNavigator: React.FunctionComponent = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name={MyPageScreens.MyPageHome}
        component={MyPageScreen}
        options={{headerShown: false}}
      />
    </MyPageStack.Navigator>
  );
};
export default MyPageStackNavigator;
