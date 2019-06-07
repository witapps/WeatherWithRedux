import { StackActions, NavigationActions } from 'react-navigation';

export function resetTo(prevProps, routeName, params = {}) {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName, params })]
  });
  prevProps.navigation.dispatch(resetAction);
}
