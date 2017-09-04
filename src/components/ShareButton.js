import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native';
const shareButton = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.shareQuote}>
      <View>
        <Text style={styles.icon}>share</Text>
      </View>
    </TouchableWithoutFeedback>
  )
};
const styles = StyleSheet.create({
  icon: {
    fontSize: 20
  }
});
export default shareButton;
