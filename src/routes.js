import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Loading from '~/pages/Loading';
import Welcome from '~/pages/Welcome';
import Main from '~/pages/Main';
import NewEntry from '~/pages/NewEntry';
import Report from '~/pages/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      Welcome,
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Loading',
      backBehavior: 'history',
    }
  )
);

export default Routes;
