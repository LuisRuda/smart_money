import Realm from 'realm';

import CategorySchema from '~/schemas/CategorySchema';
import EntrySchema from '~/schemas/EntrySchema';

import {cleanInitialized} from './Welcome';
import {initCategoriesDB} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2,
  });

  // cleanInitialized();
  initCategoriesDB(realm);

  return realm;
};
