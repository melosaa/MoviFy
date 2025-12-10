import React from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../assets/icons';
import colors from '../../styles/colors';
import styles from './PopularCard.style';

const PopularCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={item.image} />
      </View>

      <View style={styles.icon_wrapper}>
        <LinearGradient
          colors={['#1f1f1f', '#1f1f1f', colors.orange]}
          locations={[0, 0.7, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.inner_circle}>
            <Image style={styles.icon} source={Icons.hearth} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default PopularCard;
