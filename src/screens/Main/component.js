import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Permissions from 'react-native-permissions';

import styles from './styles';

export default class component extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { weather } = this.props;
    if (!weather.isStart) {
      this.sendWeather();
    }
  }

  onPressRefresh = () => {
    this.sendWeather();
  };

  sendWeather = () => {
    Permissions.request('location').then(response => {
      if (response === 'authorized') {
        console.log(response);
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            const { latitude, longitude } = position.coords;
            this.props.getWeather({
              latitude,
              longitude
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
  };

  renderTemp = () => {
    const { isStart } = this.props.weather;
    if (isStart) {
      const { temp, humidity } = this.props.weather.main;
      return (
        <View>
          <Text style={styles.text}>Temperature: {temp}°С</Text>
          <Text style={styles.text}>Humidity: {humidity}%</Text>
        </View>
      );
    }
    // return <Text>dsada</Text>;
  };

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.flex} />
        {this.renderTemp()}
        <View style={styles.flex} />
        <Text style={styles.button} onPress={this.onPressRefresh}>
          Refresh
        </Text>
        <View style={styles.flex} />
      </View>
    );
  }
}
