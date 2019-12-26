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

export default function NewEntryInput({value, onChangeDebit, onChangeValue}) {
  const [debit, setDebit] = useState(value < 0 ? -1 : 1);
  const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '');

  function onChangeDebitCredit() {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit(true);
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

NewEntryInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeDebit: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
