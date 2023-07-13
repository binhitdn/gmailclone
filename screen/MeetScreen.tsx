import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const MeetScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>こんにちは！</Text>
    </SafeAreaView>
  );
};

export default MeetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
