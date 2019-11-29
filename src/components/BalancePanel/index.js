import React from 'react';
import {Container} from './styles';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel() {
  return (
    <Container>
      <BalancePanelLabel />
      <BalancePanelChart />
    </Container>
  );
}
