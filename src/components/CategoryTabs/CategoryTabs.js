import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CategoryTabs.style';

const categories = ['All', 'Featured', 'Movies', 'Series', 'Anime', 'MyList'];

const CategoryTabs = () => {
  return (
    <View style={styles.container}>
      {categories.map(item => (
        <View style={styles.tab}>
          <Text style={styles.tabText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoryTabs;
