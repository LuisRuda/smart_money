import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Main from '~/pages/Main';
import NewEntry from '~/pages/NewEntry';
import Report from '~/pages/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Welcome',
      backBehavior: 'history',
    }
  )
);

export default Routes;
