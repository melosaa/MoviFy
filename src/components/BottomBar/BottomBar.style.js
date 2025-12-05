import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 427;

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 81 * scale,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    overflow: 'hidden',

    borderColor: 'rgba(255,255,255,0.2)',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
    elevation: 10,
  },

  blur: {
    ...StyleSheet.absoluteFill,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  item: {
    alignItems: 'center',
  },

  label: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  icon: {
    width: 32,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});
