import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/assets/colors';

export const Container = styled.View`
  background-color: ${colors.asphalt};
  margin: 5px;
  border-radius: 5px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  padding: 8px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: ${colors.white};
  margin-bottom: 5px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
`;

export const ActionLabel = styled.Text`
  flex: 1;
  font-size: 12px;
  color: ${colors.white};
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ActionButtonIcon = styled(Icon).attrs({
  name: 'insert-chart',
  color: colors.white,
})`
  margin-right: 2px;
`;

export const ActionButtonText = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;
