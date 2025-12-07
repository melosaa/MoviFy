import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './TrailerCard.style';

const TrailerCard = ({ thumbnail, onPress, title, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.topAccent} />

        <View style={styles.thumbnailWrapper}>
          <Image source={thumbnail} style={styles.thumbnail} />

          <View style={styles.playButton}>
            <Image source={icon} style={styles.playIcon} />
          </View>
        </View>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TrailerCard;
