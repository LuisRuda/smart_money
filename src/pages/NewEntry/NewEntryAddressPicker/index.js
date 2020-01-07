import React from 'react';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
// eslint-disable-next-line import/no-extraneous-dependencies
import {API_KEY_GOOGLE} from 'react-native-dotenv';
import {Container} from './styles';

import colors from '~/assets/colors';

export default function NewEntryAddressPicker({address, onChange}) {
  function getLocation(latitude, longitude) {
    Geocoder.init(API_KEY_GOOGLE); // use a valid API key

    Geocoder.from({latitude, longitude})
      .then(json => {
        const formattedAddress = json.results[0].formatted_address;

        Alert.alert('Localização', formattedAddress, [
          {
            text: 'Cancelar',
            onPress: () => {},
            style: 'Cancel',
          },
          {
            text: 'Confirmar',
            onPress: () =>
              onChange({
                ltd: latitude,
                lgt: longitude,
                addr: formattedAddress,
              }),
          },
        ]);
      })
      .catch(() => {
        Alert.alert('Houve um erro ao recuperar a sua Localização.');
      });
  }

  function getPosition() {
    Geolocation.getCurrentPosition(
      pos => {
        const {latitude} = pos.coords;
        const {longitude} = pos.coords;

        getLocation(latitude, longitude);
      },
      () => {
        Alert.alert('Houve um erro ao recuperar a sua Posição.');
      }
    );
  }

  function onButtonPress() {
    if (address) {
      Alert.alert('Localização', address, [
        {
          text: 'Apagar',
          onPress: () => {
            onChange({ltd: null, lgt: null, addr: ''});
          },
          style: 'Cancel',
        },
        {text: 'Ok'},
      ]);
    } else {
      getPosition();
    }
  }

  return (
    <Container active={address} onPress={onButtonPress}>
      <Icon name="person-pin" size={30} color={colors.white} />
    </Container>
  );
}

NewEntryAddressPicker.propTypes = {
  address: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
