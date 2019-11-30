import React from 'react';
import {Container, ContainerButtons, Button} from './styles';

import BalanceLabel from '~/components/BalanceLabel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';

export default function Report() {
  return (
    <Container>
      <BalanceLabel />
      <EntrySummary />
      <EntryList />
      <ContainerButtons>
        <Button title="Salvar" />
        <Button title="Cancelar" />
      </ContainerButtons>
    </Container>
  );
}
