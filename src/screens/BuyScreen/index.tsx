import FlexCenterSection from '../../components/FlexCenterSection';
import {Button, SafeAreaView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  BuyScreens,
  BuyStackParamList,
} from '../../navigators/BuyStackNavigators';

type BuyScreenNavigationProps = StackNavigationProp<
  BuyStackParamList,
  BuyScreens.BuyDetail
>;

interface BuyScreenProps {
  navigation: BuyScreenNavigationProps;
}

const BuyScreen: React.FunctionComponent<BuyScreenProps> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <FlexCenterSection>
        <Text>Buy Screen</Text>
        <Button
          title="상세 페이지 이동 (하단 탭 없음)"
          onPress={() => navigation.navigate(`BuyDetail`)}
        />
      </FlexCenterSection>
    </SafeAreaView>
  );
};
export default BuyScreen;
