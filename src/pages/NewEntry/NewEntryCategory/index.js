import React, {useState} from 'react';
import {Modal} from 'react-native';
import {Container, PickerButton, PickerButtonText} from './styles';

export default function NewEntryCategory() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <PickerButton onPress={() => setModalVisible(true)}>
        <PickerButtonText>Alimentação</PickerButtonText>
      </PickerButton>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <PickerButton onPress={() => setModalVisible(false)}>
          <PickerButtonText>Fechar</PickerButtonText>
        </PickerButton>
      </Modal>
    </Container>
  );
}
