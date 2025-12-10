import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.28;
const CARD_HEIGHT = CARD_WIDTH * 1.4;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
    flex: 1,
  },
  inner_container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 24,
    overflow: 'hidden',
    borderColor: colors.orange,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    resizeMode: 'cover',
  },
  icon_wrapper: {
    position: 'absolute',
    bottom: -28,
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  inner_circle: {
    width: 38,
    height: 38,
    borderRadius: 27.5,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});
