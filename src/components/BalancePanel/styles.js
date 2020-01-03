import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '~/assets/colors';

export const Container = styled.View`
  margin-bottom: -20px;
`;

export const Panel = styled(LinearGradient).attrs({
  colors: [colors.violet, colors.blue],
})``;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin-top: -25px;
  margin-right: 10px;
  shadow-color: ${colors.black};
  elevation: 5;
`;
