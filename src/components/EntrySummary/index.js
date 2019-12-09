import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  ActionContainer,
  ActionLabel,
  ActionButton,
  ActionButtonIcon,
  ActionButtonText,
} from './styles';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary({entriesGrouped}) {
  return (
    <Container>
      <Title>Categorias</Title>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
      <ActionContainer>
        <ActionLabel>Últimos 7 dias</ActionLabel>
        <ActionButton>
          <ActionButtonIcon />
          <ActionButtonText>Ver mais</ActionButtonText>
        </ActionButton>
      </ActionContainer>
    </Container>
  );
}

EntrySummary.propTypes = {
  entriesGrouped: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
