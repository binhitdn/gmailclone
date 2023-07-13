import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';

const ButtonNewEmail = () => {
  return (
    <View style={styles.container}>
      <Icon name="pencil-outline" size={30} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});

export default ButtonNewEmail;
