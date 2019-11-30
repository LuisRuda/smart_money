import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import NewEntry from '~/pages/NewEntry';
import Report from '~/pages/Report';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Report',
      backBehavior: 'history',
    }
  )
);

export default Routes;
