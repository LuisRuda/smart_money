import React from 'react';
import PropTypes from 'prop-types';
import {Container, Text} from './styles';

export default function SecondaryButton({title, onPress}) {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
}

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
