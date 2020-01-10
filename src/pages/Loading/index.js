import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Container, Loader} from './styles';

import {isInitialized} from '~/services/Welcome';

export default function Loading({navigation}) {
  useEffect(() => {
    async function makeRedirect() {
      const init = await isInitialized();

      if (init === true) {
        navigation.navigate('Main');
      } else {
        navigation.navigate('Welcome');
      }
    }

    makeRedirect();
  }, []);

  return (
    <Container>
      <Loader />
    </Container>
  );
}

Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
