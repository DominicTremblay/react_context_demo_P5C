import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
      <Tabs.Screen name="films" options={{ title: 'Collection de films' }} />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default Layout;
