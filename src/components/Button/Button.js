import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Icons from '../../assets/icons';
import styles from './Button.style';

const Button = ({ text, onPress, loading, icon, theme }) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}
    >
      <View style={styles[theme].button_container}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles[theme].title}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
