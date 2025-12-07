import React from 'react';
import { View, Text } from 'react-native';

const MovieDetail = ({ route }) => {
  const { movie } = route.params;

  return (
    <View>
      <Text>movie detail screen</Text>
    </View>
  );
};

export default MovieDetail;
