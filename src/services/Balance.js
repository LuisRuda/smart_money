import {getRealm} from './Realm';

export const getBalance = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries.sum('amount');
};
