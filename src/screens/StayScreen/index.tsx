import FlexCenterSection from '../../components/FlexCenterSection';
import {Button, SafeAreaView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import StayStackNavigator, {
  StayScreens,
  StayStackParamList,
} from '../../navigators/StayStackNavigators';

// MainScreen 에 필요한 파라미터들을 StackNavigationProp 으로 타입 명시해준다.
type StayScreenNavigationProps = StackNavigationProp<
  StayStackParamList,
  StayScreens.StayDetail
>;

interface StayScreenProps {
  navigation: StayScreenNavigationProps;
}

const StayScreen: React.FunctionComponent<StayScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlexCenterSection>
        <Text>Stay Screen</Text>
        <Button
          title="상세 페이지 이동 (하단 탭 없음)"
          onPress={() => navigation.navigate(`StayDetail`)}
        />
      </FlexCenterSection>
    </SafeAreaView>
  );
};
export default StayScreen;
