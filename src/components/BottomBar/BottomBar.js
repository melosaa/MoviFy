import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Icons from '../../assets/icons/index.ts';
import styles from './BottomBar.style';

const BottomBar = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <BlurView
        style={styles.blur}
        blurType="dark"
        blurAmount={50}
        reducedTransparencyFallbackColor="rgba(31,31,31,0.6)"
      />
      <View style={styles.content}>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.icon} source={Icons.home}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.icon} source={Icons.search}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.icon} source={Icons.favorite}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.icon} source={Icons.profile}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;
