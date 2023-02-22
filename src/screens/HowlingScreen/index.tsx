import FlexCenterSection from '../../components/FlexCenterSection';
import {Button, SafeAreaView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  HowlingScreens,
  HowlingStackParamList,
} from '../../navigators/HowlingStackNavigators';

type HowlingScreenNavigationProps = StackNavigationProp<
  HowlingStackParamList,
  HowlingScreens.HowlingDetail
>;

interface HowlingScreenProps {
  navigation: HowlingScreenNavigationProps;
}

const HowlingScreen: React.FunctionComponent<HowlingScreenProps> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <FlexCenterSection>
        <Text>Howling Screen</Text>
        <Button
          title="상세 페이지 이동 (하단 탭 없음)"
          onPress={() => navigation.navigate(`HowlingDetail`)}
        />
      </FlexCenterSection>
    </SafeAreaView>
  );
};
export default HowlingScreen;
