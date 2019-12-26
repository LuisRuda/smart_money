import React from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {Container, ScrollView} from './styles';

import BalancePanel from '~/components/BalancePanel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';

import colors from '~/assets/colors';

export default function Main({navigation}) {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.violet} />
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <ScrollView>
        <EntrySummary navigation={navigation} />
        <EntryList navigation={navigation} />
      </ScrollView>
    </Container>
  );
}
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
