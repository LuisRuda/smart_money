import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import {
  Container,
  PickerButton,
  PickerButtonText,
  ContainerModal,
  List,
  ModalItemText,
  CloseButton,
  CloseButtonText,
} from './styles';

import {getAllCategories} from '~/services/Categories';

export default function NewEntryCategory() {
  const [modalVisible, setModalVisible] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await getAllCategories();
      setAllCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <PickerButton onPress={() => setModalVisible(true)}>
        <PickerButtonText>Alimentação</PickerButtonText>
      </PickerButton>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <ContainerModal>
          <List
            data={allCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PickerButton>
                <ModalItemText color={item.color}>{item.name}</ModalItemText>
              </PickerButton>
            )}
          />
          <CloseButton onPress={() => setModalVisible(false)}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
