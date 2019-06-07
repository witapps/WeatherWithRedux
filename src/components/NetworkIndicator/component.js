import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

export default class component extends Component {
  render() {
    return (
      <Modal isVisible={this.props.networkIndicator}>
        <View style={styles.flex}>
          <View style={styles.flex} />
          <ActivityIndicator size="large" />
          <View style={styles.flex} />
        </View>
      </Modal>
    );
  }
}
