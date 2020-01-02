import React, {useState, useEffect} from 'react';
import {Modal, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {Container, PickerButton, ModalItemText} from './styles';

import PrimaryButton from '~/components/PrimaryButton';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
} from '~/services/Categories';

export default function CategoryModal({
  categoryType,
  isVisible,
  onConfirm,
  onCancel,
}) {
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  function categoriesData() {
    if (categoryType === 'all') {
      return allCategories;
    }
    if (categoryType === 'debit') {
      return debitCategories;
    }
    return creditCategories;
  }

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
      setAllCategories(await getAllCategories());
    }

    loadCategories();
  }, []);

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <Container>
        <FlatList
          data={categoriesData()}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PickerButton onPress={() => onConfirm(item)}>
              <ModalItemText color={item.color}>{item.name}</ModalItemText>
            </PickerButton>
          )}
        />
        <PrimaryButton title="Fechar" onPress={onCancel} />
      </Container>
    </Modal>
  );
}

CategoryModal.propTypes = {
  categoryType: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
