import FlexCenterSection from '../../components/FlexCenterSection';
import {Button, SafeAreaView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MyPageStackParamList} from 'navigators/MyPageStackNavigators';

type MyPageScreenNavigationProps = StackNavigationProp<MyPageStackParamList>;

interface MyPageScreenProps {
  navigation: MyPageScreenNavigationProps;
}

const MyPageScreen: React.FunctionComponent<MyPageScreenProps> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <FlexCenterSection>
        <Text>My Page Screen</Text>
      </FlexCenterSection>
    </SafeAreaView>
  );
};
export default MyPageScreen;
