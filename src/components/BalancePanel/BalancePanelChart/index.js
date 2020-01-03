import React from 'react';
import {StyleSheet} from 'react-native';
import {BarChart} from 'react-native-svg-charts';
import {Container} from './styles';

import useBalanceSumByDate from '~/hooks/useBalanceSumByDate';

const styles = StyleSheet.create({
  chart: {
    height: 60,
  },
});

export default function BalancePanelChart() {
  const [balanceSum] = useBalanceSumByDate();

  return (
    <Container>
      <BarChart
        style={styles.chart}
        data={balanceSum}
        svg={{
          fill: 'rgba(0,0,0,0.1)',
          stroke: 'rgba(0,0,0,0.1)',
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
      />
    </Container>
  );
}
