import React, {useEffect, useState} from 'react';
import {Container, Title, List, Text} from './styles';

import {getEntries} from '~/services/Entries';

export default function EntryList() {
  const [entries, setEntries] = useState([]);

  async function loadEntries() {
    const data = await getEntries();
    setEntries(data);
  }

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <Container>
      <Title>Últimos lançamentos</Title>
      <List
        data={entries}
        renderItem={({item}) => (
          <Text>
            - {item.description}: R${item.amount}
          </Text>
        )}
      />
    </Container>
  );
}
