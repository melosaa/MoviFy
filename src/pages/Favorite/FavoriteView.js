import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Icons from '../../assets/icons';
import BottomBar from '../../components/BottomBar';
import CategoryTabs from '../../components/CategoryTabs';
import PopularCard from '../../components/PopularCard';
import SearchBar from '../../components/SearchBar';
import styles from '../Search/SearchView.style';
import { useGetMovieGenresQuery } from '../../services/genresApi';
import {
  useFilteredTrendingMovies,
  ALL_GENRE,
} from '../../hooks/useFilteredMovies';
import { useLazySearchMovieQuery } from '../../services/searchApi';
const FavoriteView = () => {
  const [searchText, setSearchText] = useState('');
  const [triggerSearch, { data: searchData, isFetching }] =
    useLazySearchMovieQuery();

  const searchResults = searchData?.results ?? [];

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={null}
          renderItem={({ item }) => <PopularCard item={item} />}
          keyExtractor={item => String(item.id)}
          numColumns={3}
          columnWrapperStyle={styles.column_wrapper_style}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.header}>
              <SearchBar
                leftIcon={Icons.searchBar}
                placeholder="Search movie, series"
                rightIcon={Icons.voice}
                filterIcon={Icons.filter}
                value={searchText}
                onChangeText={text => {
                  setSearchText(text);
                  if (text.length > 2) triggerSearch(text);
                }}
              />

              <View style={styles.text_container}>
                <View style={styles.divider} />
                <Text style={styles.title}>My Popular List</Text>
              </View>

              {isFetching ? (
                <Text style={{ color: 'white' }}>Searching...</Text>
              ) : null}
            </View>
          }
        />
      </View>

      <BottomBar />
    </>
  );
};

export default FavoriteView;
