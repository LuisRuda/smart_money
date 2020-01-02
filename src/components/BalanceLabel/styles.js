import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '~/assets/colors';

export const Container = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;

export const Panel = styled(LinearGradient).attrs({
  colors: [colors.violet, colors.blue],
})`
  padding: 10px 30px;
  border-radius: 10px;
  margin-vertical: 10px;
  min-width: 80px;
`;

export const Value = styled.Text`
  font-size: 28px;
  color: ${colors.white};
  text-align: center;
`;
