import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title, List, Entry} from './styles';

export default function EntrySummaryList({entriesGrouped}) {
  return (
    <Container>
      <Title>Categorias</Title>
      <List
        data={entriesGrouped}
        renderItem={({item}) => (
          <Entry>
            - {item.description}: R${item.amount}
          </Entry>
        )}
      />
    </Container>
  );
}

EntrySummaryList.propTypes = {
  entriesGrouped: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
