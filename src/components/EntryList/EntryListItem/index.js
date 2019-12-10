import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Circle, Rect} from 'react-native-svg';
import {Container} from './styles';

import colors from '~/assets/colors';

export default function EntryListItem({entry, isFirstItem, isLastItem}) {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  // const bulletColor = entry.category.color || colors.white;
  const bulletColor = colors.white;

  return (
    <Container>
      <Svg height="50" width="30">
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
    </Container>
  );
}

EntryListItem.propTypes = {
  isFirstItem: PropTypes.bool,
  isLastItem: PropTypes.bool,
};

EntryListItem.defaultProps = {
  isFirstItem: false,
  isLastItem: false,
};
