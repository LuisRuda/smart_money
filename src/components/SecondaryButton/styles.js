import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.TouchableOpacity`
  padding: 8px 20px;
  margin: 10px;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.white};
`;
