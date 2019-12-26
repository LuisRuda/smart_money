import styled from 'styled-components/native';

import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: 10px;
`;

export const FormContainer = styled.View`
  flex: 1;
  padding-vertical: 20px;
`;

export const TInput = styled.TextInput`
  border-color: #000;
  border-width: 1px;
`;

export const Button = styled.Button``;

export const ContainerButtons = styled.View``;

export const FormActionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-vertical: 10px;
`;
