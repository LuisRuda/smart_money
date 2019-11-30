import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  FormContainer,
  TInput,
  Button,
  ContainerButtons,
} from './styles';

import BalanceLabel from '~/components/BalanceLabel';

export default function NewEntry({navigation}) {
  return (
    <Container>
      <BalanceLabel />

      <FormContainer>
        <TInput />
        <TInput />
        <Button title="GPS" />
        <Button title="Camera" />
      </FormContainer>

      <ContainerButtons>
        <Button title="Adicionar" />
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
