import React from 'react';
import {Container, Label, Panel, Value} from './styles';

import Currency from '~/components/Currency';

import useBalance from '~/hooks/useBalance';

export default function BalanceLabel() {
  const [balance] = useBalance();

  return (
    <Container>
      <Label>Saldo atual</Label>
      <Panel>
        <Value>
          <Currency value={balance} />
        </Value>
      </Panel>
    </Container>
  );
}
