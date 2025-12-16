import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
    maxHeight: 400,
    borderRadius: 25,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.orange,
    overflow: 'hidden',
  },
  title: {
    marginTop: 12,
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  ratingRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  star: {
    marginRight: 4,
    fontSize: 16,
  },
  rating: {
    color: 'yellow',
    fontWeight: '600',
    fontSize: 12,
  },
});
