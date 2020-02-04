import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerShown: false,
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      },
    }
  )
);

export default Routes;
