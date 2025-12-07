import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './CategoryTabs.style';

const categories = ['All', 'Featured', 'Movies', 'Series', 'Anime', 'My List'];

const CategoryTabs = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((item, index) => (
        <View style={styles.tab} key={index}>
          <Text style={styles.tabText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryTabs;
