import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.TouchableOpacity`
  border-radius: 150px;
  border-width: 1px;
  border-color: ${colors.green};
  padding: 8px 20px;
  margin: 10px;
  width: 120px;
  align-self: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.green};
`;
