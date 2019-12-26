import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Button} from './styles';

import colors from '~/assets/colors';

export default function NewEntryDatePicker({value, onChange}) {
  const [modalVisible, setModalVisible] = useState(false);

  function onCancel() {
    setModalVisible(false);
  }

  function onChangeValue(date) {
    onChange(date);
    onCancel();
  }

  return (
    <Container>
      <Button onPress={() => setModalVisible(true)}>
        <Icon name="today" size={30} color={colors.white} />
      </Button>

      <DateTimePicker
        mode="date"
        date={value}
        isVisible={modalVisible}
        datePickerModeAndroid="calendar"
        titleIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </Container>
  );
}

NewEntryDatePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
