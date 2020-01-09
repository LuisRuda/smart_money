import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {TextInputMask} from 'react-native-masked-text';
import {Container, DebitButton, DebitButtonText} from './styles';

import colors from '~/assets/colors';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 28,
    color: colors.white,
    textAlign: 'right',
    paddingRight: 20,
  },
});

export default function InputMoney({
  value,
  startWithDebit,
  onChangeDebit,
  onChangeValue,
}) {
  function setDefaultDebit() {
    if (value === 0) {
      return startWithDebit ? -1 : 1;
    }
    return value <= 0 ? -1 : 1;
  }

  function setDefaultDebitPrefix() {
    if (value === 0) {
      return startWithDebit ? '-' : '';
    }
    return value <= 0 ? '-' : '';
  }

  const [debit, setDebit] = useState(setDefaultDebit);
  const [debitPrefix, setDebitPrefix] = useState(setDefaultDebitPrefix);

  function onChangeDebitCredit() {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit && onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit && onChangeDebit(true);
    }

    onChangeValue(value * -1);
  }

  return (
    <Container>
      <DebitButton onPress={onChangeDebitCredit}>
        <DebitButtonText prefix>{debitPrefix}</DebitButtonText>
        <DebitButtonText>R$</DebitButtonText>
      </DebitButton>
      <TextInputMask
        style={styles.input}
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText
        onChangeText={(maskedValue, rawValue) =>
          onChangeValue(rawValue * debit)
        }
      />
    </Container>
  );
}

InputMoney.propTypes = {
  value: PropTypes.number.isRequired,
  startWithDebit: PropTypes.bool,
  onChangeDebit: PropTypes.func,
  onChangeValue: PropTypes.func.isRequired,
};

InputMoney.defaultProps = {
  onChangeDebit: null,
  startWithDebit: true,
};
