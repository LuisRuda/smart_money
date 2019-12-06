import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Container, Title, List, ContainerEntry, Text, Button} from './styles';

import {getEntries} from '~/services/Entries';

export default function EntryList({navigation}) {
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
          <ContainerEntry>
            <Text>
              - {item.description} R${item.amount}
            </Text>
            <Button
              title={item.id}
              onPress={() => navigation.navigate('NewEntry', {entry: item})}
            />
          </ContainerEntry>
        )}
      />
    </Container>
  );
}

EntryList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
