import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text} from './styles';

export default function PrimaryButton({title, onPress}) {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
}

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
