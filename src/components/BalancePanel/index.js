import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Button, Text} from './styles';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel({currentBalance}) {
  return (
    <View>
      <Container>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </Container>
      <Button>
        <Text>+</Text>
      </Button>
    </View>
  );
}

BalancePanel.propTypes = {
  currentBalance: PropTypes.number.isRequired,
};
