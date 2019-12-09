import React from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from './styles';

import BalancePanel from '~/components/BalancePanel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';

import colors from '~/assets/colors';

export default function Main({navigation}) {
  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 201},
    {key: '2', description: 'Combustível ', amount: 120},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer ', amount: 250},
    {key: '5', description: 'Outros', amount: 201},
  ];

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.violet} />
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList navigation={navigation} />
    </Container>
  );
}
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
