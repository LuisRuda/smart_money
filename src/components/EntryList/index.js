import React, {useEffect, useState} from 'react';
import {List} from './styles';

import ContainerStandard from '~/components/ContainerStandard';
import EntryListItem from './EntryListItem';

import {getEntries} from '~/services/Entries';

export default function EntryList() {
  const [entries, setEntries] = useState([]);

  async function loadEntries() {
    const data = await getEntries();
    setEntries(data);
  }

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <ContainerStandard
      title="Últimos lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <List
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
          />
        )}
      />
    </ContainerStandard>
  );
}
