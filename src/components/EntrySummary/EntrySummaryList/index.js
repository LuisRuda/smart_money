import React, {useState} from 'react';
import {Container, Title, List, Entry} from './styles';

export default function EntrySummaryList() {
  const [categorias, setCategorias] = useState([
    {key: 'Alimentação: R$201'},
    {key: 'Combustível: R$ 120'},
    {key: 'Aluguel: R$120'},
    {key: 'Lazer: R$ 250'},
    {key: 'Outros: R$201'},
  ]);

  return (
    <Container>
      <Title>Categorias</Title>
      <List
        data={categorias}
        renderItem={({item}) => <Entry>{item.key}</Entry>}
      />
    </Container>
  );
}
