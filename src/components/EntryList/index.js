import React, {useState} from 'react';
import {Container, Title, List, Text} from './styles';

import EntryListItem from './EntryListItem';

export default function EntryList() {
  const [lancamentos, setLancamentos] = useState([
    {key: 'Padária R$10'},
    {key: 'Supermercado R$10'},
    {key: 'Posto gasolina R$80'},
  ]);
  return (
    <Container>
      <Title>Últimos lançamentos</Title>
      <List
        data={lancamentos}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </Container>
  );
}
