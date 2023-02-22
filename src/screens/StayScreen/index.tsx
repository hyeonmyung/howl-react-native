import FlexCenterSection from '../../components/FlexCenterSection';
import {Button, SafeAreaView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  StayScreens,
  StayStackParamList,
} from '../../navigators/StayStackNavigators';

// MainScreen 에 필요한 파라미터들을 StackNavigationProp 으로 타입 명시해준다.
type StayScreenNavigationProps = StackNavigationProp<
  StayStackParamList,
  StayScreens.StayDetail
>; // navigators/HomeStackNavigators/index.tsx 에서 지정했던 HomeStackParamList

// MainScreenProps 에 대한 인터페이스 지정
// 인터페이스: 객체의 타입을 정의할 수 있게 하는 것
interface StayScreenProps {
  navigation: StayScreenNavigationProps; // 네비게이션 속서에 대한 타입으로 방금 지정해주었던 MainScreenNavigationProps 을 지정
}

const StayScreen: React.FunctionComponent<StayScreenProps> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <FlexCenterSection>
        <Text>Stay Screen</Text>
        <Button
          title="페이지 이동"
          onPress={() => navigation.navigate(StayScreens.StayDetail)}
        />
      </FlexCenterSection>
    </SafeAreaView>
  );
};
export default StayScreen;
