import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = () => {
  // Simulate some loading time with setTimeout
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the todo list screen after loading (Replace 'TodoListScreen' with your actual todo list screen)
      // navigation.replace('TodoListScreen');
    }, 2000); // Change the time as needed
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SplashScreen;
