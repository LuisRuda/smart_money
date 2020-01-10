import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  DescriptionContainer,
  DescriptionText,
  AmountContainer,
  AmountText,
  DetailsContainerItem,
  DetailsText,
} from './styles';

import Currency from '~/components/Currency';

import moment from '~/vendors/moment';

import colors from '~/assets/colors';

export default function EntryListItem({
  entry,
  isFirstItem,
  isLastItem,
  onEntryPress,
}) {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 52;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry.category.color || colors.white;

  return (
    <TouchableOpacity onPress={onEntryPress}>
      <Container>
        <View>
          <Svg height="52" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={colors.background}
              />
            )}

            <Circle
              cx="10"
              cy="25"
              r="8"
              stroke={colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <DescriptionContainer>
          <DescriptionText>{entry.description}</DescriptionText>
          <View>
            <DetailsContainerItem>
              <Icon name="access-time" size={12} color={colors.metal} />
              <DetailsText>{moment(entry.entryAt).calendar()}</DetailsText>
            </DetailsContainerItem>
            {entry.address !== null && (
              <DetailsContainerItem>
                <Icon name="person-pin" size={12} color={colors.metal} />
                <DetailsText>{entry.address}</DetailsText>
              </DetailsContainerItem>
            )}
          </View>
        </DescriptionContainer>

        <AmountContainer>
          <AmountText>
            <Currency value={entry.amount} />
          </AmountText>
        </AmountContainer>
      </Container>
    </TouchableOpacity>
  );
}

EntryListItem.propTypes = {
  entry: PropTypes.shape({
    description: PropTypes.string,
    entryAt: PropTypes.string,
    address: PropTypes.string,
    amount: PropTypes.number,
    category: PropTypes.shape({
      color: PropTypes.string,
    }).isRequired,
  }).isRequired,
  isFirstItem: PropTypes.bool,
  isLastItem: PropTypes.bool,
  onEntryPress: PropTypes.func.isRequired,
};

EntryListItem.defaultProps = {
  isFirstItem: false,
  isLastItem: false,
};
