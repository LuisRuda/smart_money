import {Alert} from 'react-native';

import {getRealm} from './Realm';
import {getUUID} from './UUID';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');
  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
        category: value.category || entry.category,
      };

      realm.create('Entry', data, true);
    });
  } catch (err) {
    Alert.alert('Erro ao salvar os dados de lançamento');
  }

  return data;
};

export const deleteEntry = async entry => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (err) {
    Alert.alert('Erro ao excluir este lançamento');
  }
};
