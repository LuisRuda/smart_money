import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {PieChart} from 'react-native-svg-charts';
import {Container} from './styles';

const styles = StyleSheet.create({
  chart: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
});

export default function EntrySummaryChart({data}) {
  const chartData = data.map(({category, amount}) => ({
    key: category.id,
    value: amount,
    svg: {
      fill: category.color,
    },
    arc: {
      outerRadius: '100%',
      innerRadius: '80%',
    },
  }));

  return (
    <Container>
      <PieChart style={styles.chart} data={chartData} />
    </Container>
  );
}

EntrySummaryChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
