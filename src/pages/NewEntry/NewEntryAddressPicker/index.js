import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './styles';

import colors from '~/assets/colors';

export default function NewEntryAddressPicker() {
  function onButtonPress() {
    Geolocation.getCurrentPosition(
      pos => {
        const {latitude} = pos.coords;
        const {longitude} = pos.coords;
      },
      error => {
        console.tron.log(error);
      }
    );
  }

  return (
    <Container onPress={onButtonPress}>
      <Icon name="person-pin" size={30} color={colors.white} />
    </Container>
  );
}
