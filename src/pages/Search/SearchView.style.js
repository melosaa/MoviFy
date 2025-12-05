import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const { width } = Dimensions.get('window');
const scale = width / 427;
const BOTTOM_BAR_HEIGHT = 81 * scale;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGroundColor,
    paddingHorizontal: 12,
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
    paddingHorizontal: 16,
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

  // info_wrapper: {
  //   position: 'absolute',
  //   width: '100%',
  //   bottom: -(BOTTOM_BAR_HEIGHT * 0.3),
  // },

  // infoCard: {
  //   borderTopLeftRadius: 24,
  //   borderTopRightRadius: 24,
  //   borderBottomLeftRadius: 0,
  //   borderBottomRightRadius: 0,
  //   height: Dimensions.get('window').height / 2,
  //   paddingHorizontal: 20,
  //   overflow: 'hidden',
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  // },
  // header_button: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   backgroundColor: 'rgba(175, 170, 170, 0.45)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderWidth: 1,
  //   borderColor: 'rgba(175, 170, 170, 0.45)',
  //   backdropFilter: 'blur(6px)',
  // },
  text_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
    paddingHorizontal: 30,
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
  },
});
