import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {Text} from './styles';

export default function Currency({value}) {
  return (
    <NumberFormat
      value={parseFloat(value)}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      fixedDecimalScale
      decimalScale={2}
      prefix="R$ "
      renderText={item => <Text>{item}</Text>}
    />
  );
}

Currency.propTypes = {
  value: PropTypes.string.isRequired,
};
