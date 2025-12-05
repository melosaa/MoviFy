import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './MovieCard.style';
const screenWidth = Dimensions.get('window').width;
const CARD_WIDTH = screenWidth * 0.7;
const SPACING = 16;
const SNAP_INTERVAL = CARD_WIDTH + SPACING;

const MovieCard = ({ title, image, rating, starIcon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, { width: CARD_WIDTH }]}>
        <Image source={image} style={styles.poster} />

        <Text style={styles.title}>{title}</Text>

        <View style={styles.ratingRow}>
          {starIcon && <Image source={starIcon} style={styles.starIcon} />}

          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const MovieCarousel = ({ data = [], navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleMomentumEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SNAP_INTERVAL);
    setActiveIndex(index);
  };
  const whenClicked = () => {
    navigation.navigate('MovieView');
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        width: CARD_WIDTH,
        marginHorizontal: SPACING / 2,
      }}
    >
      <MovieCard
        title={item.title}
        image={item.image}
        rating={item.rating}
        starIcon={item.icon}
        onPress={whenClicked}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        horizontal
        conty
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: (screenWidth - CARD_WIDTH) / 2,
        }}
        snapToInterval={SNAP_INTERVAL}
        snapToAlignment="center"
        decelerationRate="fast"
        onMomentumScrollEnd={handleMomentumEnd}
        getItemLayout={(_, index) => ({
          length: SNAP_INTERVAL,
          offset: SNAP_INTERVAL * index,
          index,
        })}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MovieCard;
