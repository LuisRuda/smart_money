import React from 'react';
import {StyleSheet} from 'react-native';
import {BarChart} from 'react-native-svg-charts';
import {Container} from './styles';

const styles = StyleSheet.create({
  chart: {
    height: 60,
  },
});

export default function BalancePanelChart() {
  const data = [100, 80, -30, 200, 10, 35, 6];

  return (
    <Container>
      <BarChart
        style={styles.chart}
        data={data}
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
