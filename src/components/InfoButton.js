import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native';
const shareButton = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.showInfo}>
      <View>
        <Text style={styles.icon}>info</Text>
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
