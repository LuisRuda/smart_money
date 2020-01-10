import React from 'react';
import PropTypes from 'prop-types';
import {Container, Label, Value} from './styles';

import Currency from '~/components/Currency';

export default function BalancePanelLabel({currentBalance}) {
  return (
    <Container>
      <Label>Saldo atual</Label>
      <Value>
        <Currency value={currentBalance} />
      </Value>
    </Container>
  );
}

BalancePanelLabel.propTypes = {
  currentBalance: PropTypes.number.isRequired,
};
