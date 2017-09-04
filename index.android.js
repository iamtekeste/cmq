import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert
} from 'react-native';

import Header from './src/components/Header';

export default class CMQ extends Component {
  shareQuote = () => {
    Alert.alert('Hola homie!');
  }
  showInfo = () => {
    Alert.alert('Showing Info');
  }
  render = () => {
    return (
      <View style={styles.container}>
        <Header headerText={'CMQ'} shareQuote={this.shareQuote} showInfo={this.showInfo} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 40
  }
});

AppRegistry.registerComponent('cmq', () => CMQ);
