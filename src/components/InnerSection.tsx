import {FC, ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const SectionContainer = styled.View<{
  background?: string;
  textAlign?: string;
}>`
  background: ${({background}) => background};
  text-align: ${({textAlign}) => textAlign};
`;
interface SectionProps {
  withPadding?: boolean;
  background?: string;
  textAlign?: string;
  children?: ReactNode;
}

const InnerSection: FC<SectionProps> = ({
  children,
  background,
  withPadding,
  ...props
}) => {
  return (
    <SectionContainer background={background || `transparent`} {...props}>
      {children}
    </SectionContainer>
  );
};
export default InnerSection;
