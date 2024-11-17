import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Film = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Vue Film: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Film;
