import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from 'screens/Main';

const Route = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Weather at your location'
      }
    }
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'screen'
  }
);

export const Navigation = createAppContainer(Route);
