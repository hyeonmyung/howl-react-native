import FlexCenterSection from '../../components/FlexCenterSection';
import {Button, SafeAreaView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeScreens,
} from '../../navigators/HomeStackNavigators';

// MainScreen 에 필요한 파라미터들을 StackNavigationProp 으로 타입 명시해준다.
type MainScreenNavigationProps = StackNavigationProp<HomeStackParamList>; // navigators/HomeStackNavigators/index.tsx 에서 지정했던 HomeStackParamList

// MainScreenProps 에 대한 인터페이스 지정
// 인터페이스: 객체의 타입을 정의할 수 있게 하는 것
interface MainScreenProps {
  navigation: MainScreenNavigationProps; // 네비게이션 속서에 대한 타입으로 방금 지정해주었던 MainScreenNavigationProps 을 지정
}

const HomeScreen: React.FunctionComponent<MainScreenProps> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <FlexCenterSection>
        <Text>Home Screen</Text>
      </FlexCenterSection>
    </SafeAreaView>
  );
};
export default HomeScreen;
