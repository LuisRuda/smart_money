import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title, List, Text} from './styles';

export default function EntryList({entries}) {
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

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
