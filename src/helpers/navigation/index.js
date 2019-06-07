import { NavigationActions } from 'react-navigation';

const navigator = {
  navigation: null,
  setTopLevelNavigator: navigatorRef => {
    navigator.navigation = navigatorRef;
  },
  navigate: (routeName, params) => {
    navigator.navigation.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }
};

export default navigator;
