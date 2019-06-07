import React, { Component } from 'react';
import Permissions from 'react-native-permissions';

import Main from './directions/Main';

export default class component extends Component {
  componentDidMount() {
    Permissions.request('location').then(response => {
      console.log(response);
    });
  }

  render() {
    return <Main />;
  }
}
