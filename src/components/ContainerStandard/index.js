import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  ActionContainer,
  ActionLabel,
  ActionButton,
  ActionButtonIcon,
  ActionButtonText,
} from './styles';

export default function ContainerStandard({
  title,
  children,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
}) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
      {(actionLabelText || actionButtonText) && (
        <ActionContainer>
          {actionLabelText && <ActionLabel>{actionLabelText}</ActionLabel>}
          {actionButtonText && (
            <ActionButton onPress={onPressActionButton}>
              <ActionButtonIcon />
              <ActionButtonText>{actionButtonText}</ActionButtonText>
            </ActionButton>
          )}
        </ActionContainer>
      )}
    </Container>
  );
}

ContainerStandard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  actionLabelText: PropTypes.string,
  actionButtonText: PropTypes.string,
  onPressActionButton: PropTypes.func,
};

ContainerStandard.defaultProps = {
  actionLabelText: undefined,
  actionButtonText: undefined,
  onPressActionButton: () => {},
};
