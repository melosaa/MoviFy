import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icons from '../../assets/icons';
import styles from './BottomBar.style';

const tabs = [
  { key: 'home', icon: Icons.home, route: 'HomeView' },
  { key: 'search', icon: Icons.search, route: 'SearchView' },
  { key: 'favorite', icon: Icons.favorite, route: 'MovieView' },
  { key: 'profile', icon: Icons.profile, route: 'null' },
];

const BottomBar = () => {
  const navigation = useNavigation();

  const handlePress = route => {
    if (!route) return;
    navigation.navigate(route);
  };

  return (
    <View style={styles.wrapper}>
      <BlurView
        style={styles.blur}
        blurType="dark"
        blurAmount={50}
        reducedTransparencyFallbackColor="rgba(31,31,31,0.6)"
      />
      <View style={styles.content}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={styles.item}
            onPress={() => handlePress(tab.route)}
          >
            <Image style={styles.icon} source={tab.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomBar;
