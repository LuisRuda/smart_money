import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const PickerButton = styled.TouchableOpacity`
  background-color: ${colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const ModalItemText = styled.Text`
  font-size: 22px;
  color: ${props => props.color};
  text-align: center;
`;
