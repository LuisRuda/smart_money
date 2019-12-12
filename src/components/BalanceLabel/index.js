import React from 'react';
import {Container, Label, Panel, Value} from './styles';

export default function BalanceLabel() {
  const currentBalance = 2064.35;

  return (
    <Container>
      <Label>Saldo atual</Label>
      <Panel>
        <Value>{currentBalance}</Value>
      </Panel>
    </Container>
  );
}
