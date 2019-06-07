import React, { Component } from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from 'store';

const { store, persistor } = configureStore();

export default class component extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {this.props.children}
        </PersistGate>
      </Provider>
    );
  }
}
