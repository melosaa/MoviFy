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

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MovieView = ({ route, navigation }) => {
  const { movie } = route.params || {};

  return (
    <View style={styles.container}>
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
              <SafeAreaView style={styles.header}>
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
              </SafeAreaView>
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

          {/* Cast */}
          <View style={styles.sectionWrapper}>
            <View style={styles.text_container}>
              <View style={styles.divider} />
              <Text style={styles.title}>Movie List</Text>
            </View>

            <FlatList
              data={castData}
              horizontal
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.castList}
              renderItem={({ item }) => (
                <CastCard image={item.image} name={item.name} />
              )}
            />
          </View>

          {/* Trailers */}
          <View style={styles.sectionWrapper}>
            <View style={styles.trailerHeader}>
              <View style={styles.trailerTitleLeft}>
                <View style={styles.trailerAccent} />
                <Text style={styles.trailerTitle}>Trailers</Text>
              </View>
              <View style={styles.trailerArrows}>
                <Text style={styles.trailerArrow}>‹</Text>
                <Text style={styles.trailerArrow}>›</Text>
              </View>
            </View>

            <FlatList
              data={trailerData}
              horizontal
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.trailerList}
              renderItem={({ item }) => (
                <TrailerCard thumbnail={item.thumbnail} title={item.title} />
              )}
            />
          </View>

          {/* Photos */}
          <View style={styles.sectionWrapper}>
            <View style={styles.photoHeader}>
              <View style={styles.photoTitleLeft}>
                <View style={styles.photoAccent} />
                <Text style={styles.photoTitle}>Photos</Text>
              </View>
              <View style={styles.photoArrows}>
                <Text style={styles.photoArrow}>‹</Text>
                <Text style={styles.photoArrow}>›</Text>
              </View>
            </View>

            <FlatList
              data={trailerData}
              horizontal
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.photoList}
              renderItem={({ item }) => (
                <TrailerCard thumbnail={item.thumbnail} title={item.title} />
              )}
            />
          </View>
          <View style={styles.commentHeader}>
            <View style={styles.commentTitleLeft}>
              <View style={styles.commentAccent} />
              <Text style={styles.commentTitle}>Comments</Text>
            </View>
            <View style={styles.commentArrows}>
              <Text style={styles.commentArrow}>Comments</Text>
              <Text style={styles.commentArrow}>View All</Text>
            </View>
          </View>
          <FlatList
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

      {/* ALTTA SABİT KALACAK */}
      <BottomBar />
    </View>
  );
};

export default MovieView;
