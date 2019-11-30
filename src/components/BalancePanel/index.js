import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styles';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel({currentBalance}) {
  return (
    <Container>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
    </Container>
  );
}

BalancePanel.propTypes = {
  currentBalance: PropTypes.number.isRequired,
};
