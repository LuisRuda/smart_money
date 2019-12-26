import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.red};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;
