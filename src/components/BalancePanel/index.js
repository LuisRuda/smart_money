import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Panel, Button} from './styles';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import useBalance from '~/hooks/useBalance';

import colors from '~/assets/colors';

export default function BalancePanel({onNewEntryPress}) {
  const [balance] = useBalance();

  return (
    <Container>
      <Panel>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </Panel>
      <Button onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={colors.white} />
      </Button>
    </Container>
  );
}

BalancePanel.propTypes = {
  onNewEntryPress: PropTypes.func.isRequired,
};
