import { React } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ComentCard.style';
import Icons from '../../assets/icons';

const CommentCard = ({ avatar, name, date, ratingText, comment, rating }) => {
  const renderStars = rating => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? Icons.starFilled : Icons.starEmpty}
          style={styles.starIcon}
        />,
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Image source={avatar} style={styles.avatar} />

        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.metaRow}>
            <View style={styles.starRow}>{renderStars(rating)}</View>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.commentText}>{comment}</Text>
    </View>
  );
};

export default CommentCard;
