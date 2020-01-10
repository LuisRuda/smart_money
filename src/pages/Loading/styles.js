import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  color: colors.violet,
  size: 60,
})``;
