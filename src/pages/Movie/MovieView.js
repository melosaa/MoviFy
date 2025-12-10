import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './MovieView.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Images from '../../assets/images';
import BottomBar from '../../components/BottomBar';
import Icons from '../../assets/icons';
import MovieInfoSheet from '../../components/MovieInfoSheet';
import CastCard from '../../components/CastCard';
import TrailerCard from '../../components/TrailerCard';
import castData from '../../data/movies';
import trailerData from '../../data/movies';
import CommentCard from '../../components/CommentCard';
import colors from '../../styles/colors';
import commentData from '../../data/commentData';
import SectionWihtList from '../../components/SectionWithList';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MovieView = ({ route, navigation }) => {
  const { movie } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.backGroundColor }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: SCREEN_HEIGHT + 1,
          paddingBottom: 140,
        }}
      >
        <View style={{ height: SCREEN_HEIGHT }}>
          <View style={styles.container}>
            <ImageBackground
              source={Images.batman}
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
            title="The Batman"
            ratingText="IMDB 7.9 ⭐ 8.9 (551k reviews)"
            tags={['PG-13', '2022', '2h 58m']}
            genres={['Action', 'Crime', 'Drama']}
          />
        </View>
        <View style={styles.bottomContainer}>
          {/* Description */}
          <View style={styles.sectionWrapper}>
            <View style={styles.section}>
              <Text style={styles.sectionText}>{movie?.content}</Text>
            </View>
          </View>
          <SectionWihtList
            data={castData}
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
            sectionKey="trailers"
            data={castData}
            horizontal
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.castList}
            renderItem={({ item }) => (
              <TrailerCard thumbnail={item.thumbnail} title={item.title} />
            )}
          />
          <SectionWihtList
            sectionKey="trailers"
            data={castData}
            horizontal
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.castList}
            renderItem={({ item }) => (
              <TrailerCard thumbnail={item.thumbnail} title={item.title} />
            )}
          />
          <SectionWihtList
            sectionKey="comments"
            data={commentData}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <CommentCard
                avatar={{ uri: item.avatar }}
                name={item.name}
                rating={item.rating}
                date={item.date}
                comment={item.comment}
              />
            )}
          />
        </View>
      </ScrollView>
      <BottomBar />
    </SafeAreaView>
  );
};

export default MovieView;
