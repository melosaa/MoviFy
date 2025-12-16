import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './CategoryTabs.style';
import { useGetMovieGenresQuery } from '../../services/genresApi';

const CategoryTabs = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState('all');

  const { data, isLoading, error } = useGetMovieGenresQuery();

  const tabs = useMemo(() => {
    const genres = data?.genres ?? [];
    return [{ id: 'all', name: 'All' }, ...genres];
  }, [data]);

  const handlePress = tab => {
    setSelectedId(tab.id);
    onSelect?.(tab.id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, selectedId === tab.id && styles.activeTab]}
          onPress={() => handlePress(tab)}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              selectedId === tab.id && styles.activeTabText,
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryTabs;
