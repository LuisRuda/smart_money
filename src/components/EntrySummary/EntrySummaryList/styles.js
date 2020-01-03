import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const List = styled.FlatList`
  flex: 1;
`;

export const EntrySummaryItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EntrySummaryItemName = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;

export const EntrySummaryItemAmount = styled.Text`
  flex: 1;
  font-size: 12px;
  color: ${colors.white};
  text-align: right;
`;
