import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CastCard.style';

const CastCard = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
    </View>
  );
};

export default CastCard;
