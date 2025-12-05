import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './MovieInfoSheet.style';
import Icons from '../../assets/icons';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

const MovieInfoSheet = ({
  visible = true,
  title,
  ratingText,
  tags = [],
  genres = [],
}) => {
  if (!visible) return null;

  return (
    <View style={styles.info_wrapper}>
      <View style={styles.infoCard}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={20}
          reducedTransparencyFallbackColor="rgba(0,0,0,0.7)"
        />

        <View style={styles.content}>
          <View style={styles.rating_Row}>
            <View style={styles.leftGroup}>
              <View style={styles.circleButton}>
                <Text style={styles.circleText}>IMDB 7.9</Text>
              </View>
              <View style={styles.ratingCenter}>
                <Image style={styles.starIcon} source={Icons.star} />
                <Text style={styles.ratingText}>8.9</Text>
              </View>
            </View>
            <View style={styles.review_container}>
              <Text style={styles.reviewText}>(551k reviews)</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.tagsRow}>
            {tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>

          <View style={styles.genresRow}>
            {genres.map((genre, index) => (
              <View key={index} style={styles.genreWrapper}>
                <Text style={styles.genre}>{genre}</Text>

                {index !== genres.length - 1 && (
                  <Text style={styles.dot}> • </Text>
                )}
              </View>
            ))}
          </View>

          <View style={styles.button_section}>
            <Button
              text="Play Now"
              theme="primary"
              onPress={() => console.log('Melissaa')}
              icon={Icons.play}
            />
            <Button
              text="Download"
              theme="secondary"
              onPress={() => console.log('Melissaa')}
              icon={Icons.download}
            />
          </View>
          <View>
            <View style={styles.option_section}>
              <View style={styles.option_item}>
                <Image source={Icons.rate} style={styles.option_icon} />
                <Text style={styles.option_text}>Rate</Text>
              </View>

              <View style={styles.option_item}>
                <Image source={Icons.plus} style={styles.option_icon} />
                <Text style={styles.option_text}>Add to List</Text>
              </View>

              <View style={styles.option_item}>
                <Image source={Icons.right_back} style={styles.option_icon} />
                <Text style={styles.option_text}>Share</Text>
              </View>
            </View>
            <LinearGradient
              colors={['#1F1F1F', '#FB9722', '#1F1F1F']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.option_line}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieInfoSheet;
