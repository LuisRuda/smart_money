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
  const [amount, setAmount] = useState('0');

  function save() {
    const data = {
      amount: parseFloat(amount),
    };
    saveEntry(data);
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
  }).isRequired,
};
