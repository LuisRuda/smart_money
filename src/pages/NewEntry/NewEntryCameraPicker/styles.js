import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Button = styled.TouchableOpacity`
  background-color: ${props => (props.active ? colors.blue : colors.asphalt)};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const PictureButtonsAction = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 16;
`;
