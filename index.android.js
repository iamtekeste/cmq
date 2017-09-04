import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert,
  Text
} from 'react-native';

import firebase from './src/firebase';
import Header from './src/components/Header';
import Quote from './src/components/Quote';

export default class CMQ extends Component {
  state = {
    quotes: null,
    currentIndex: 91
  };
  shareQuote = () => {
    Alert.alert('Hola homie!');
  }
  showInfo = () => {
    Alert.alert('Showing Info');
  }
  getCurrentQuote = () => {
    const {quotes, currentIndex} = this.state;
    return quotes[currentIndex];
  }
  componentDidMount = () => {
    const quotesRef = firebase.database().ref('movies');
    quotesRef.on('value', snapshot => {
      let quotes = snapshot.val();
      this.setState({
        quotes: quotes
      });
    })
  }
  render = () => {
    const {quotes, currentIndex} = this.state
    return (
      <View style={styles.container}>
        <Header headerText={'CMQ'} shareQuote={this.shareQuote} showInfo={this.showInfo} />
        {quotes ?
          <Quote data={quotes[currentIndex]} />
          :
          <Text>Loading</Text>
        }
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    height: 100,
    display:'flex',
    flex:1
  }
});

AppRegistry.registerComponent('cmq', () => CMQ);
