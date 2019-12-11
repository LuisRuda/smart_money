import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
`;

export const AmountContainer = styled.View`
  justify-content: center;
`;

export const AmountText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DetailsText = styled.Text`
  color: ${colors.metal};
  font-size: 12px;
  margin-left: 2px;
  margin-right: 8px;
`;
