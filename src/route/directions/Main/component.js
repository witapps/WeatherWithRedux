import React, { Component } from 'react';
import { Navigation } from './Navigation';
import NavigationService from 'helpers/navigation';

export default class Main extends Component {
  render() {
    return (
      <Navigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
