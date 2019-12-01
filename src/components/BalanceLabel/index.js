import React from 'react';
import PropTypes from 'prop-types';
import {Container, Label, Value} from './styles';

export default function BalanceLabel({currentBalance}) {
  return (
    <Container>
      <Label>Saldo atual</Label>
      <Value>{currentBalance}</Value>
    </Container>
  );
}

BalanceLabel.propTypes = {
  currentBalance: PropTypes.number.isRequired,
};
