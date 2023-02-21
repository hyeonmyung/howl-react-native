import {FC, ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const Section = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
interface SectionProps {
  withPadding?: boolean;
  children?: ReactNode;
}
const FlexCenterSection: FC<SectionProps> = ({children}) => {
  return <Section>{children}</Section>;
};
export default FlexCenterSection;
