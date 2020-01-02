import React, {useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {PickerButton, PickerButtonText} from './styles';

import CategoryModal from '~/components/CategoryModal';

export default function NewEntryCategory({debit, category, onChangeCategory}) {
  const [modalVisible, setModalVisible] = useState(false);

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
      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCatategoryPress}
        onCancel={onClosePress}
      />
    </View>
  );
}

NewEntryCategory.propTypes = {
  debit: PropTypes.bool.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};
