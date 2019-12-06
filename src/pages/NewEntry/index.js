import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  FormContainer,
  TInput,
  Button,
  ContainerButtons,
} from './styles';

import BalanceLabel from '~/components/BalanceLabel';

import {saveEntry} from '~/services/Entries';

export default function NewEntry({navigation}) {
  const currentBalance = 2064.35;
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  function save() {
    const data = {
      amount: parseFloat(amount),
    };
    saveEntry(data, entry);
  }

  return (
    <Container>
      <BalanceLabel currentBalance={currentBalance} />

      <FormContainer>
        <TInput value={amount} onChangeText={text => setAmount(text)} />
        <TInput />
        <Button title="GPS" />
        <Button title="Camera" />
      </FormContainer>

      <ContainerButtons>
        <Button title="Adicionar" onPress={save} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </ContainerButtons>
    </Container>
  );
}

NewEntry.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
