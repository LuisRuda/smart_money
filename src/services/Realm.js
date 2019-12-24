import Realm from 'realm';

import CategorySchema from '~/schemas/CategorySchema';
import EntrySchema from '~/schemas/EntrySchema';

import {initCategoriesDB} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 1,
  });

  await initCategoriesDB(realm);

  return realm;
};
