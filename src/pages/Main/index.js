import React from 'react';
import {Container} from './styles';

import BalancePanel from '~/components/BalancePanel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';

export default function Main() {
  return (
    <Container>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </Container>
  );
}
