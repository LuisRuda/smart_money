import React from 'react';
import PropTypes from 'prop-types';
import {Inner} from './styles';

import ContainerStandard from '~/components/ContainerStandard';
import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import useBalanceSumByCategory from '~/hooks/useBalanceSumByCategory';

export default function EntrySummary({days, navigation}) {
  const [balanceSum] = useBalanceSumByCategory(days);

  return (
    <ContainerStandard
      title="Categorias"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={() => navigation.navigate('Report')}>
      <Inner>
        <EntrySummaryChart data={balanceSum} />
        <EntrySummaryList data={balanceSum} />
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
