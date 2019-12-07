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

import {saveEntry, deleteEntry} from '~/services/Entries';

export default function NewEntry({navigation}) {
  const currentBalance = 2064.35;
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  function OnSave() {
    const data = {
      amount: parseFloat(amount),
    };
    saveEntry(data, entry);
    onClose();
  }

  function OnDelete() {
    onClose();
  }

  function onClose() {
    deleteEntry(entry);
    navigation.goBack();
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
        <Button title="Adicionar" onPress={OnSave} />
        <Button title="excluir" onPress={OnDelete} />
        <Button title="Cancelar" onPress={onClose} />
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
