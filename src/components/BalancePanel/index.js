import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Button} from './styles';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import colors from '~/assets/colors';

export default function BalancePanel({onNewEntryPress}) {
  const currentBalance = 2064.35;

  return (
    <View>
      <Container>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </Container>
      <Button onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={colors.white} />
      </Button>
    </View>
  );
}

BalancePanel.propTypes = {
  onNewEntryPress: PropTypes.func.isRequired,
};
