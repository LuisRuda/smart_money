import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  align-items: center;
  z-index: 1;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${colors.white};
`;

export const Value = styled.Text`
  font-size: 36px;
  color: ${colors.white};
`;
