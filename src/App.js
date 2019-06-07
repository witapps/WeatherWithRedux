import React, { Component } from 'react';

import ReduxView from 'components/ReduxView';
import NetworkIndicator from 'components/NetworkIndicator';
import Route from 'route';

export default class App extends Component {
  render() {
    return (
      <ReduxView>
        <Route />
        <NetworkIndicator />
      </ReduxView>
    );
  }
}
