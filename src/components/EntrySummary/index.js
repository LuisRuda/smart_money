import React from 'react';
import PropTypes from 'prop-types';
import {Inner} from './styles';

import ContainerStandard from '~/components/ContainerStandard';
import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary({days, navigation}) {
  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 201},
    {key: '2', description: 'Combustível ', amount: 120},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer ', amount: 250},
    {key: '5', description: 'Outros', amount: 201},
  ];

  return (
    <ContainerStandard
      title="Categorias"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={() => navigation.navigate('Report')}>
      <Inner>
        <EntrySummaryChart />
        <EntrySummaryList entriesGrouped={entriesGrouped} />
      </Inner>
    </ContainerStandard>
  );
}

EntrySummary.propTypes = {
  days: PropTypes.number,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

EntrySummary.defaultProps = {
  days: 7,
};
