import React from 'react';
import {Container, Label, Panel, Value} from './styles';

import useBalance from '~/hooks/useBalance';

export default function BalanceLabel() {
  const [balance] = useBalance();

  return (
    <Container>
      <Label>Saldo atual</Label>
      <Panel>
        <Value>{balance}</Value>
      </Panel>
    </Container>
  );
}
