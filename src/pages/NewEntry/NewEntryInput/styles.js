import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
`;

export const DebitButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px;
`;

export const DebitButtonText = styled.Text`
  color: ${colors.white};
  font-size: 28px;
`;
