import React from 'react';
import PropTypes from 'prop-types';
import {Container, ScrollView} from './styles';

import BalanceLabel from '~/components/BalanceLabel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';
import PrimaryButton from '~/components/PrimaryButton';

export default function Report({navigation}) {
  return (
    <Container>
      <BalanceLabel />

      <ScrollView>
        <EntrySummary />
        <EntryList />
      </ScrollView>

      <PrimaryButton
        title="Fechar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Container>
  );
}

Report.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
