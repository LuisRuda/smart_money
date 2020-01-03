import React from 'react';
import PropTypes from 'prop-types';
import {Container, List, Entry} from './styles';

export default function EntrySummaryList({data}) {
  return (
    <Container>
      {/* <List
        data={data}
        renderItem={({item}) => (
          <Entry>
            - {item.description}: R${item.amount}
          </Entry>
        )}
      /> */}
    </Container>
  );
}

EntrySummaryList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
