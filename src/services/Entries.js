import {Alert} from 'react-native';

import {getRealm} from './Realm';
import {getUUID} from './UUID';

import moment from '~/vendors/moment';

export const getEntries = async (days, category) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = moment()
      .subtract(days, 'days')
      .toDate();

    realm = realm.filtered('entryAt >= $0', date);
  }

  if (category && category.id) {
    realm = realm.filtered('category == $0', category);
  }

  const entries = realm.sorted('entryAt', true);
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
        description: value.category.name,
        address: value.address || entry.address,
        latitude: value.latitude || entry.latitude,
        longitude: value.longitude || entry.longitude,
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
