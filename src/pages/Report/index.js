import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  FiltersContainer,
  FilterButton,
  FilterButtonText,
  ScrollView,
} from './styles';

import BalanceLabel from '~/components/BalanceLabel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';
import PrimaryButton from '~/components/PrimaryButton';
import RelativeDaysModal from '~/components/RelativeDaysModal';
import CategoryModal from '~/components/CategoryModal';

import colors from '~/assets/colors';

export default function Report({navigation}) {
  const [daysModalVisible, setDaysModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [relativeDays, setRelativeDays] = useState(7);
  const [category, setCategory] = useState({
    id: null,
    name: 'Todas categorias',
  });

  function onRelativeDaysClosePress() {
    setDaysModalVisible(false);
  }

  function onRelativeDaysPress(item) {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  }

  function onCategoryClosePress() {
    setCategoryModalVisible(false);
  }

  function onCategoryPress(item) {
    setCategory(item);
    onCategoryClosePress();
  }

  return (
    <Container>
      <BalanceLabel />

      <FiltersContainer>
        <FilterButton onPress={() => setDaysModalVisible(true)}>
          <FilterButtonText>Últimos {relativeDays} dias</FilterButtonText>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={colors.champagneDark}
          />
        </FilterButton>
        <RelativeDaysModal
          isVisible={daysModalVisible}
          onConfirm={onRelativeDaysPress}
          onCancel={onRelativeDaysClosePress}
        />

        <FilterButton onPress={() => setCategoryModalVisible(true)}>
          <FilterButtonText>{category.name}</FilterButtonText>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={colors.champagneDark}
          />
        </FilterButton>
        <CategoryModal
          categoryType="all"
          isVisible={categoryModalVisible}
          onConfirm={onCategoryPress}
          onCancel={onCategoryClosePress}
        />
      </FiltersContainer>

      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} category={category} />
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
