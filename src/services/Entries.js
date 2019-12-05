import {Alert} from 'react-native';

import {getRealm} from './Realm';

export const saveEntry = async value => {
  const realm = await getRealm();
  let data = {};

  const {amount} = value;

  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data, true);
    });
    console.tron.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (err) {
    Alert.alert('Erro ao salvar os dados de lançamento');
  }

  return data;
};
