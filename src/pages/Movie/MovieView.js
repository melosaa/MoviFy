import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import BottomBar from '../../components/BottomBar';
import CastCard from '../../components/CastCard';
import CommentCard from '../../components/CommentCard';
import MovieInfoSheet from '../../components/MovieInfoSheet';
import SectionWihtList from '../../components/SectionWithList';
import TrailerCard from '../../components/TrailerCard';
import { getTmdbImage } from '../../utils/imagePath/imagePath';
import styles from './MovieView.style';
import { useMovieViewData } from '../../hooks/useMovieViewData';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MovieView = ({ route, navigation }) => {
  const movieId = route?.params?.movieId;

  const { details, tags, people, reviews, photos, trailers, isLoading, error } =
    useMovieViewData(movieId);

  if (!movieId) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>
          movieId gelmedi. navigate ederken `movieId` gönderdiğine emin ol.
        </Text>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ActivityIndicator />
          <Text>Loading details...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Details failed: {JSON.stringify(error)}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: SCREEN_HEIGHT + 1,
          paddingBottom: 140,
        }}
      >
        <View style={{ height: SCREEN_HEIGHT }}>
          <View style={styles.container}>
            <ImageBackground
              source={getTmdbImage(details?.backdrop_path) ?? Images.batman}
              style={styles.image}
              resizeMode="cover"
            >
              <View style={styles.header}>
                <TouchableOpacity
                  style={styles.header_button}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    style={styles.header_icon}
                    source={Icons.leftArrowIcon}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.header_button}>
                  <Image style={styles.header_icon} source={Icons.hearth} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <MovieInfoSheet
            visible={true}
            title={details?.title ?? '—'}
            ratingText={details?.vote_average}
            tags={tags}
            genres={(details?.genres ?? []).map(g => g.name)}
          />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.sectionWrapper}>
            <View style={styles.section}>
              <Text style={styles.sectionText}>
                {details?.overview ?? 'No overview.'}
              </Text>
            </View>
          </View>
          <SectionWihtList
            data={people}
            sectionKey="cast"
            horizontal
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.castList}
            renderItem={({ item }) => (
              <CastCard image={item.image} name={item.name} />
            )}
          />
          <SectionWihtList
            sectionKey="photos"
            data={photos}
            horizontal
            keyExtractor={(item, index) => item.file_path ?? String(index)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.castList}
            renderItem={({ item }) => (
              <TrailerCard
                thumbnail={getTmdbImage(item.file_path, 'w500')}
                title={details?.title}
              />
            )}
          />
          <SectionWihtList
            sectionKey="trailers"
            data={trailers}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.castList}
            renderItem={({ item }) => (
              <TrailerCard
                thumbnail={getTmdbImage(details?.backdrop_path, 'w500')}
                title={item.name}
                icon={Icons.play}
                onPress={() => {}}
              />
            )}
          />

          <SectionWihtList
            sectionKey="comments"
            data={reviews}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => {
              const avatarSource = item?.author_details?.avatar_path
                ? item.author_details.avatar_path.startsWith('/https')
                  ? { uri: item.author_details.avatar_path.slice(1) }
                  : {
                      uri: `https://image.tmdb.org/t/p/w185${item.author_details.avatar_path}`,
                    }
                : Images.batman;

              return (
                <CommentCard
                  avatar={avatarSource}
                  name={item.author}
                  rating={item?.author_details?.rating ?? 0}
                  date={item.created_at?.slice(0, 10)}
                  comment={item.content}
                />
              );
            }}
          />
        </View>
      </ScrollView>

      <BottomBar />
    </SafeAreaView>
  );
};

export default MovieView;
