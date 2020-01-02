import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, FilterButton, FilterButtonText, ScrollView} from './styles';

import BalanceLabel from '~/components/BalanceLabel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';
import PrimaryButton from '~/components/PrimaryButton';
import RelativeDaysModal from '~/components/RelativeDaysModal';

import colors from '~/assets/colors';

export default function Report({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [relativeDays, setRelativeDays] = useState(7);

  function onRelativeDaysClosePress() {
    setModalVisible(false);
  }

  function onRelativeDaysPress(item) {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  }

  return (
    <Container>
      <BalanceLabel />

      <FilterButton onPress={() => setModalVisible(true)}>
        <FilterButtonText>Últimos {relativeDays} dias</FilterButtonText>
        <Icon
          name="keyboard-arrow-down"
          size={20}
          color={colors.champagneDark}
        />
      </FilterButton>
      <RelativeDaysModal
        isVisible={modalVisible}
        onConfirm={onRelativeDaysPress}
        onCancel={onRelativeDaysClosePress}
      />

      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} />
      </ScrollView>

      <PrimaryButton
        title="Fechar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Container>
  );
}

Report.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
