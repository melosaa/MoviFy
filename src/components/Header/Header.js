import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Header.style';

const Header = ({ rightIcon, leftIcon }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.left_container}>
          {leftIcon && <Image source={leftIcon} style={styles.left_icon} />}
          <Text style={styles.header_text}>Movie Time</Text>
        </View>
        {rightIcon && <Image source={rightIcon} style={styles.right_icon} />}
      </View>
    </SafeAreaView>
  );
};

export default Header;
