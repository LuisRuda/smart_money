import React from 'react';
import {Container} from './styles';

import BalancePanel from '~/components/BalancePanel';

export default function Main() {
  return (
    <Container>
      <BalancePanel />
    </Container>
  );
}
