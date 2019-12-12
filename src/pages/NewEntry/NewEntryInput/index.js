import React from 'react';
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

export default function NewEntryInput({value, onChangeValue}) {
  return (
    <Container>
      <DebitButton>
        <DebitButtonText>-</DebitButtonText>
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
        onChangeText={rawValue => onChangeValue(rawValue)}
      />
    </Container>
  );
}

NewEntryInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
