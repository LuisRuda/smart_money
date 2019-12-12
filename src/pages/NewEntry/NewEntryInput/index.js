import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {TextInputMask} from 'react-native-masked-text';
import {Container} from './styles';

import colors from '~/assets/colors';

const styles = StyleSheet.create({
  input: {
    fontSize: 28,
    color: colors.white,
    textAlign: 'center',
    backgroundColor: colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default function NewEntryInput({value, onChangeValue}) {
  return (
    <Container>
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
