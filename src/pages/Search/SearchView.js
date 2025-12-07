import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import Icons from '../../assets/icons';
import styles from '../../pages/Search/SearchView.style';
import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import CategoryTabs from '../../components/CategoryTabs';
import PopularCard from '../../components/PopularCard';
import { FlatList } from 'react-native';
import popularData from '../../data/movies';
const SearchView = () => {
  return (
    <>
      <View style={styles.container}>
        <SearchBar
          leftIcon={Icons.searchBar}
          placeholder="Search movie,series"
          rightIcon={Icons.voice}
          filterIcon={Icons.filter}
        />
        <CategoryTabs />
        <View style={styles.text_container}>
          <View style={styles.divider} />
          <Text style={styles.title}>Popular Searches</Text>
        </View>
        <FlatList
          data={popularData}
          renderItem={({ item }) => <PopularCard item={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={styles.column_wrapper_style}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomBar />
    </>
  );
};

export default SearchView;
