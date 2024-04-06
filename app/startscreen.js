import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    // Use your fancy font here
    fontFamily: 'YourCustomFont', // Change 'YourCustomFont' to your actual font family name
  },
});

export default StartScreen;
