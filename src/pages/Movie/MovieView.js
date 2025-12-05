import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './MovieView.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Images from '../../assets/images';
import BottomBar from '../../components/BottomBar';
import Icons from '../../assets/icons';
import { BlurView } from '@react-native-community/blur';
import MovieInfoSheet from '../../components/MovieInfoSheet';
import { ScrollView } from 'react-native-gesture-handler';

const MovieView = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={Images.batman}
          style={styles.image}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.header}>
            <TouchableOpacity style={styles.header_button}>
              <Image style={styles.header_icon} source={Icons.leftArrowIcon} />
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
      <BottomBar />
    </>
  );
};

export default MovieView;
