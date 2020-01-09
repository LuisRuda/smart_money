import React, {useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Button} from './styles';

import colors from '~/assets/colors';

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonTakePicture: {
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonDeletePicture: {
    flex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default function NewEntryCameraPicker() {
  const [modalVisible, setModalVisible] = useState(false);
  const [camera, setCamera] = useState();

  function onTakePicture() {}

  function onDelete() {
    setModalVisible(false);
  }

  return (
    <Container>
      <Button onPress={() => setModalVisible(true)}>
        <Icon name="photo-camera" size={30} color={colors.white} />
      </Button>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <RNCamera
          ref={ref => setCamera(ref)}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos da sua permissão para usar a câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          captureAudio={false}>
          <Icon
            name="photo-camera"
            size={40}
            color={colors.white}
            onPress={onTakePicture}
            style={styles.buttonTakePicture}
          />
          <Icon
            name="close"
            size={50}
            color={colors.white}
            onPress={onDelete}
            style={styles.buttonDeletePicture}
          />
        </RNCamera>
      </Modal>
    </Container>
  );
}
