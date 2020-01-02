import React from 'react';
import {Modal, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {Container, ModalItem, ModalItemText} from './styles';

import PrimaryButton from '~/components/PrimaryButton';

export default function RelativeDaysModal({isVisible, onConfirm, onCancel}) {
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <Container>
        <FlatList
          data={relativeDays}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => (
            <ModalItem onPress={() => onConfirm(item)}>
              <ModalItemText>{`${item} dias`}</ModalItemText>
            </ModalItem>
          )}
        />

        <PrimaryButton title="Fechar" onPress={onCancel} />
      </Container>
    </Modal>
  );
}

RelativeDaysModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
