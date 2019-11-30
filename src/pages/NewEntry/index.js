import React from 'react';
import {
  Container,
  FormContainer,
  TInput,
  Button,
  ContainerButtons,
} from './styles';

import BalanceLabel from '~/components/BalanceLabel';

export default function NewEntry() {
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
        <Button title="Cancelar" />
      </ContainerButtons>
    </Container>
  );
}
