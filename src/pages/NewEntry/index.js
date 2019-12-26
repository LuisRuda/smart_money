import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  FormContainer,
  ContainerButtons,
  FormActionContainer,
} from './styles';

import PrimaryButton from '~/components/PrimaryButton';
import SecondaryButton from '~/components/SecondaryButton';
import BalanceLabel from '~/components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategory from './NewEntryCategory';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';

import {saveEntry, deleteEntry} from '~/services/Entries';

export default function NewEntry({navigation}) {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    category: {id: null, name: 'Selecione'},
    entryAt: new Date(),
  });

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  function onClose() {
    navigation.goBack();
  }

  function onSave() {
    if (parseFloat(amount) !== 0) {
      const data = {
        amount: parseFloat(amount),
        category,
        entryAt,
      };
      saveEntry(data, entry);
      onClose();
    }
  }

  function onDelete() {
    deleteEntry(entry);
    onClose();
  }

  return (
    <Container>
      <BalanceLabel />

      <FormContainer>
        <NewEntryInput
          value={amount}
          onChangeDebit={setDebit}
          onChangeValue={setAmount}
        />
        <NewEntryCategory
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <FormActionContainer>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          {entry.id && <NewEntryDeleteAction onOkPress={onDelete} />}
        </FormActionContainer>
      </FormContainer>

      <ContainerButtons>
        <PrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          onPress={onSave}
        />
        <SecondaryButton title="Cancelar" onPress={onClose} />
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
