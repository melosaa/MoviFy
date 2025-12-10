import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: {
    width: 200,
    marginRight: 16,
  },
  card: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  topAccent: {
    height: 1,
    backgroundColor: colors.orange,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  thumbnailWrapper: {
    width: '100%',
    height: 120,
    position: 'relative',
  },

  thumbnail: {
    width: '100%',
    height: '100%',
  },

  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -22 }, { translateY: -22 }],
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  playIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
  },

  title: {
    marginTop: 8,
    color: 'white',
    fontSize: 14,
  },
});
