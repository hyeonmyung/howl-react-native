import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import StayScreen from '../../screens/StayScreen';

// 1. 필요한 스크린에 대해 enum 타입을 정의한다. (리듀서에서 액션타입을 지정해주는 것 처럼)
export enum HomeScreens {
  Home = 'Home', // 페이지 상단 헤더에 표시될 이름
}

// 2. 각 스크린 마다 필요한 파라미터 타입 정의
export type HomeStackParamList = {
  Home: undefined;
};

// 3. 방금 만든 타입을 createStackNavigator 메소드 앞에 지정해줘서 HomeStack 네비게이터 객체를 만들어줌.
const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeStackNavigator: React.FunctionComponent = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HomeScreens.Home} // 처음에 enum 으로 지정했던 HomeScreens 에서 맞는 컴포넌트명을 가져온다.
        component={HomeScreen} // 실제 보여주게 될 컴포넌트
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;
