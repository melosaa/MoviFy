import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../pages/Home/Home.style';
import BottomBar from '../../components/BottomBar';
import SearchBar from '../../components/SearchBar';
import Icons from '../../assets/icons';
import MovieCard, { MovieCarousel } from '../../components/MovieCard';
import movies from '../../data/movies';
import { Dimensions } from 'react-native';
import CategoryTabs from '../../components/CategoryTabs';

const HomView = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <SearchBar
          leftIcon={Icons.searchBar}
          placeholder="Search movie,series"
          rightIcon={Icons.voice}
        />
        <CategoryTabs />
        <View style={styles.text_container}>
          <View style={styles.divider} />
          <Text style={styles.title}>Trending Now</Text>
        </View>
        <View style={styles.carousel_wrapper}>
          <MovieCarousel data={movies} navigation={navigation} />
        </View>
        <View style={styles.contaniueHeader}>
          <View style={styles.leftDivider} />
          <Text>Continue Watching</Text>
        </View>
      </View>
      <BottomBar />
    </>
  );
};

export default HomView;
