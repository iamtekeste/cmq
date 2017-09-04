import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ShareButton from './ShareButton';
import InfoButton from './InfoButton';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <InfoButton showInfo={props.showInfo} />
      <Text style={styles.text}>{props.headerText}</Text>
      <ShareButton shareQuote={props.shareQuote} />
    </View>
  )
};

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  text: {
    fontSize: 30
  }
});
export default Header;
