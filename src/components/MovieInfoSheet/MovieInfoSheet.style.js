import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
const { width } = Dimensions.get('window');
const scale = width / 427;
const BOTTOM_BAR_HEIGHT = 81 * scale;

export default StyleSheet.create({
  info_wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'column',
  },
  infoCard: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: Dimensions.get('window').height / 2,
    paddingHorizontal: 24,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
  },
  header_button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(175, 170, 170, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(175, 170, 170, 0.45)',
    backdropFilter: 'blur(6px)',
  },
  rating_Row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },

  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  circleButton: {
    width: 52,
    height: 16,
    borderRadius: 9,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },

  circleText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 10,
  },

  ratingCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starIcon: {
    width: 16,
    height: 16,
    tintColor: 'gold',
  },

  ratingText: {
    color: 'yellow',
    fontSize: 12,
    fontWeight: '700',
  },

  reviewText: {
    color: 'white',
    opacity: 0.8,
    fontSize: 14,
  },
  review_container: {
    marginTop: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 700,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#FFFFFF3D',
    color: 'white',
    borderRadius: 14,
    fontSize: 12,
  },
  genresRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },

  genreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  genre: {
    paddingVertical: 4,
    color: 'white',
    fontSize: 11,
  },

  dot: {
    color: colors.orange,
    fontSize: 14,
    lineHeight: 14,
    marginHorizontal: 4,
  },
  button_section: {
    marginTop: 10,
  },
  option_section: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  option_item: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  option_icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  option_text: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    marginTop: 4,
  },
  option_line: {
    height: 2,
    width: '100%',
    marginTop: 10,
    borderRadius: 1,
  },
});
