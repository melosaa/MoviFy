import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import styles from './TextInput.style';

function Input({
  onChangeText,
  placeholder,
  value,
  isSecure,
  icon,
  placeholderTextColor,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          placeholder={placeholder}
          placeholderTextColor="#7rgb(65, 65, 65)"
        />
      </View>
    </View>
  );
}

export default Input;
