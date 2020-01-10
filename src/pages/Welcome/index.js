import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Container, LogoContainer, Logo, Title, Message, Label} from './styles';

import InputMoney from '~/components/InputMoney';
import PrimaryButton from '~/components/PrimaryButton';

import LogoImage from '~/assets/images/logo-white.png';

import useCategories from '~/hooks/useCategories';

import {saveEntry} from '~/services/Entries';
import {setInitialized} from '~/services/Welcome';

export default function Welcome({navigation}) {
  const [, , , initCategories] = useCategories();
  const [amount, setAmount] = useState(0);

  function onSavePress() {
    saveEntry({
      amount,
      isInit: true,
      category: initCategories,
    });

    setInitialized();
    navigation.navigate('Main');
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={LogoImage} />
      </LogoContainer>
      <Title>Olá!</Title>
      <Message>
        Para começar a usar o Smart Money, você precisa informar o saldo atual.
        Vamos lá?
      </Message>
      <Label>Informe seu saldo</Label>
      <InputMoney
        value={amount}
        startWithDebit={false}
        onChangeValue={setAmount}
      />
      <PrimaryButton title="Continuar" onPress={onSavePress} />
    </Container>
  );
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
