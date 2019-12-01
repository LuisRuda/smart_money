import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button} from './styles';

import BalancePanel from '~/components/BalancePanel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';

export default function Main({navigation}) {
  const currentBalance = 2064.35;
  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 201},
    {key: '2', description: 'Combustível ', amount: 120},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer ', amount: 250},
    {key: '5', description: 'Outros', amount: 201},
  ];
  const entries = [
    {key: '1', description: 'Padária', amount: 10},
    {key: '2', description: 'Supermercado', amount: 10},
    {key: '3', description: 'Posto gasolina', amount: 80},
  ];

  return (
    <Container>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </Container>
  );
}
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
