import React from 'react';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './styles';

import colors from '~/assets/colors';

export default function NewEntryDeleteAction({onOkPress}) {
  function onDelete() {
    Alert.alert(
      'Apagar?',
      'Você deseja realmente apagar este lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false}
    );
  }

  return (
    <Container onPress={onDelete}>
      <Icon name="delete" size={30} color={colors.white} />
    </Container>
  );
}

NewEntryDeleteAction.propTypes = {
  onOkPress: PropTypes.func.isRequired,
};
