import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const { width } = Dimensions.get('window');
const scale = width / 427;
const BOTTOM_BAR_HEIGHT = 81 * scale;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGroundColor,
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 20,
  },
  header_icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    resizeMode: 'contain',
    color: 'white',
  },

  text_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  divider: {
    width: 3,
    height: 20,
    backgroundColor: colors.orange,
    marginRight: 8,
    marginTop: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  column_wrapper_style: {
    justifyContent: 'space-between',
    paddingTop: 20,
    marginHorizontal: 0,
  },
});
