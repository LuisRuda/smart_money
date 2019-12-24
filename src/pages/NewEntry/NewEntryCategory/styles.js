import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View``;

export const PickerButton = styled.TouchableOpacity`
  background-color: ${colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const PickerButtonText = styled.Text`
  font-size: 28px;
  color: ${colors.white};
  text-align: center;
`;
