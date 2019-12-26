import React, {useState, useEffect} from 'react';
import {View, Modal, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {
  PickerButton,
  PickerButtonText,
  ContainerModal,
  ModalItemText,
  CloseButton,
  CloseButtonText,
} from './styles';

import {getDebitCategories, getCreditCategories} from '~/services/Categories';

export default function NewEntryCategory({debit, category, onChangeCategory}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const dataDebit = await getDebitCategories();
      const creditDebit = await getCreditCategories();

      setDebitCategories(dataDebit);
      setCreditCategories(creditDebit);
    }

    loadCategories();
  }, []);

  function onClosePress() {
    setModalVisible(false);
  }

  function onCatategoryPress(item) {
    onChangeCategory(item);
    onClosePress();
  }

  return (
    <View>
      <PickerButton onPress={() => setModalVisible(true)}>
        <PickerButtonText>{category.name}</PickerButtonText>
      </PickerButton>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <ContainerModal>
          <FlatList
            data={debit ? debitCategories : creditCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PickerButton onPress={() => onCatategoryPress(item)}>
                <ModalItemText color={item.color}>{item.name}</ModalItemText>
              </PickerButton>
            )}
          />
          <CloseButton onPress={onClosePress}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </ContainerModal>
      </Modal>
    </View>
  );
}

NewEntryCategory.propTypes = {
  debit: PropTypes.number.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};
