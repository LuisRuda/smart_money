import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Container, FormContainer, Button, ContainerButtons} from './styles';

import BalanceLabel from '~/components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategory from './NewEntryCategory';

import {saveEntry, deleteEntry} from '~/services/Entries';

export default function NewEntry({navigation}) {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(entry.amount);

  function onSave() {
    if (parseFloat(amount) !== 0) {
      const data = {
        amount: parseFloat(amount),
      };
      saveEntry(data, entry);
      onClose();
    }
  }

  function OnDelete() {
    deleteEntry(entry);
    onClose();
  }

  function onClose() {
    navigation.goBack();
  }

  return (
    <Container>
      <BalanceLabel />

      <FormContainer>
        <NewEntryInput value={amount} onChangeValue={setAmount} />
        <NewEntryCategory />
        <Button title="GPS" />
        <Button title="Camera" />
      </FormContainer>

      <ContainerButtons>
        <Button title="Adicionar" onPress={onSave} />
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
