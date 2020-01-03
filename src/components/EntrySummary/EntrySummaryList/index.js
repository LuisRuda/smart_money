import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Circle} from 'react-native-svg';
import {
  Container,
  List,
  EntrySummaryItem,
  EntrySummaryItemName,
  EntrySummaryItemAmount,
} from './styles';

import colors from '~/assets/colors';

export default function EntrySummaryList({data}) {
  return (
    <List
      data={data}
      keyExtractor={item => item.category.id}
      renderItem={({item}) => (
        <EntrySummaryItem>
          <Svg height="20" width="20">
            <Circle
              cx="10"
              cy="10"
              r="8"
              stroke={colors.background}
              strokeWidth="0.5"
              fill={item.category.color || colors.white}
            />
          </Svg>
          <EntrySummaryItemName>{item.category.name}</EntrySummaryItemName>
          <EntrySummaryItemAmount>{item.amount}</EntrySummaryItemAmount>
        </EntrySummaryItem>
      )}
    />
  );
}

EntrySummaryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
