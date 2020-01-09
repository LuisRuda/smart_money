import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
`;

export const Message = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 28px;
  text-align: center;
`;
