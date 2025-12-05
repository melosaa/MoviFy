import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './SearchBar.style';

const SearchBar = ({
  label,
  onChangeText,
  placeholder,
  value,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <Image source={leftIcon} style={styles.icon} resizeMode="contain" />
      )}
      <TextInput
        autoCapitalize="none"
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input_container}
        placeholderTextColor="#1F1F1F"
      />
      <View style={styles.divider} />
      {rightIcon && (
        <Image source={rightIcon} style={styles.icon} resizeMode="contain" />
      )}
    </View>
  );
};

export default SearchBar;
