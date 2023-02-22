import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import StayScreen from 'screens/StayScreen';
import HomeScreen from '../screens/HomeScreen';

const BottomTab: React.FunctionComponent = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="홈" screenOptions={{headerShown: false}}>
      <Tab.Screen name="내집찾기" component={HomeScreen} />
      <Tab.Screen name="머물자리" component={StayScreen} />
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="하울링" component={HomeScreen} />
      <Tab.Screen name="마이페이지" component={HomeScreen} />
    </Tab.Navigator>
  );
};
export default BottomTab;
