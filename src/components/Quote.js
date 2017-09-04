import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default (props) => {
  const quote = props.data;
  return (
    <View style={styles.container}>
      <Image source={{uri: quote.gifs.small}} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.quote}>{quote.quote}</Text>
        <Text style={styles.title}>{quote.title} ({quote.year}) </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    shadowColor: '#AEA6A6',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.36,
    shadowRadius: 15
  },
  image: {
    height: 210,
  },
  card: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  quote: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30
  },
  title: {
    fontSize: 14,
    textAlign: 'center'
  }
});
