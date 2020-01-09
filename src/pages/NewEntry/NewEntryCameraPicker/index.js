import React, {useState} from 'react';
import {View, Modal, StyleSheet, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Background, PictureButtonsAction} from './styles';

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
  buttonClose: {marginLeft: 16},
  buttonCheck: {marginRight: 16},
});

export default function NewEntryCameraPicker({photo, onChangePhoto}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [camera, setCamera] = useState();

  function onClosePress() {
    setModalVisible(false);
  }

  function onDelete() {
    onChangePhoto(null);
    onClosePress();
  }

  async function onTakePicture() {
    try {
      const {uri} = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
      onClosePress();
    } catch (err) {
      Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
    }
  }

  return (
    <View>
      <Button active={photo !== null} onPress={() => setModalVisible(true)}>
        <Icon name="photo-camera" size={30} color={colors.white} />
      </Button>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        {photo ? (
          <Background source={{uri: photo}}>
            <PictureButtonsAction>
              <Icon
                name="delete"
                size={50}
                color={colors.white}
                onPress={onDelete}
                style={styles.buttonClose}
              />
              <Icon
                name="check"
                size={50}
                color={colors.white}
                onPress={onClosePress}
                style={styles.buttonCheck}
              />
            </PictureButtonsAction>
          </Background>
        ) : (
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
              onPress={onClosePress}
              style={styles.buttonDeletePicture}
            />
          </RNCamera>
        )}
      </Modal>
    </View>
  );
}

NewEntryCameraPicker.propTypes = {
  photo: PropTypes.string.isRequired,
  onChangePhoto: PropTypes.func.isRequired,
};
