import styled from 'styled-components/native';

import colors from '~/assets/colors';

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

export const ContainerModal = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const ModalItemText = styled.Text`
  font-size: 22px;
  color: ${props => props.color};
  text-align: center;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: ${colors.background};
  border-color: ${colors.green};
  border-width: 1px;
  border-radius: 15px;
  margin-vertical: 10px;
  padding: 5px 20px;
  align-self: center;
`;

export const CloseButtonText = styled.Text`
  font-size: 14px;
  color: ${colors.green};
  text-align: center;
`;
