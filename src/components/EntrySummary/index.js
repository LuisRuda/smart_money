import React from 'react';
import {Container} from './styles';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary() {
  return (
    <Container>
      <EntrySummaryChart />
      <EntrySummaryList />
    </Container>
  );
}
