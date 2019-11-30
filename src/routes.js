import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import NewEntry from '~/pages/NewEntry';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
    },
    {
      initialRouteName: 'NewEntry',
      backBehavior: 'history',
    }
  )
);

export default Routes;
