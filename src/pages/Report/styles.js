import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${colors.champagneDark};
  border-width: 1px;
  border-radius: 150px;
  padding: 5px 10px;
  margin: 0 5px;
`;

export const FilterButtonText = styled.Text`
  color: ${colors.champagneDark};
`;

export const ScrollView = styled.ScrollView``;
