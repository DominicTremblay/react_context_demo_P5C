import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false  }} />
      <Stack.Screen name="[id]" options={{ title: 'Description' }} />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Layout;
