import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false  }} />
      <Stack.Screen name="[id]" options={{ title: 'Description' }} />
    </Stack>
  );
};

export default Layout;
