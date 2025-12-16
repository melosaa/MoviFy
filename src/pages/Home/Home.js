import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icons from '../../assets/icons';
import BottomBar from '../../components/BottomBar';
import CategoryTabs from '../../components/CategoryTabs';
import { MovieCarousel } from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import styles from '../../pages/Home/Home.style';
import { useGetTrendingQuery } from '../../services/trendingMoviesApi';

const HomeView = ({ navigation }) => {
  const user = useSelector(state => state.auth.user);
  const { data, error, isLoading, isFetching } = useGetTrendingQuery('day');
  console.log(data);

  const trendingMovies =
    data?.results?.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: {
        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      },
      rating: movie.vote_average?.toFixed(1),
      icon: Icons.star,
    })) ?? [];
  if (isLoading) {
    return (
      <>
        <View
          style={[
            styles.container,
            { justifyContent: 'center', alignItems: 'center' },
          ]}
        >
          <Text style={{ color: 'white' }}>Loading...</Text>
        </View>
        <BottomBar />
      </>
    );
  }

  if (error) {
    return (
      <>
        <View style={styles.container}>
          <Text>Failed to load movies</Text>
          Failed: {JSON.stringify(error)}
        </View>
        <BottomBar />
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <SearchBar
          leftIcon={Icons.searchBar}
          placeholder="Search movie,series"
          rightIcon={Icons.voice}
        />
        <View>
          <CategoryTabs />
        </View>
        <View style={styles.text_container}>
          <View style={styles.divider} />
          <Text style={styles.title}>Trending Now</Text>
        </View>
        <View style={styles.carousel_wrapper}>
          <MovieCarousel data={trendingMovies} navigation={navigation} />
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

export default HomeView;
