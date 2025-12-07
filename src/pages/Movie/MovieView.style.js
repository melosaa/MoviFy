import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const { width } = Dimensions.get('window');
const scale = width / 427;
const BOTTOM_BAR_HEIGHT = 81 * scale;

export default StyleSheet.create({
  container: {
    flex: 1,
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

  info_wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: -(BOTTOM_BAR_HEIGHT * 0.3),
  },

  infoCard: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: Dimensions.get('window').height / 2,
    paddingHorizontal: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  sectionText: {
    color: '#FFFFFFB2',
    sizw: 17,
  },
  bottomContainer: {
    backgroundColor: colors.backGroundColor,
    paddingTop: 24,
    paddingBottom: 16,
  },

  trailerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  trailerTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  trailerAccent: {
    width: 3,
    height: 18,
    borderRadius: 999,
    backgroundColor: '#f4a21e',
    marginRight: 8,
  },

  trailerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },

  trailerArrows: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  trailerArrow: {
    color: '#bfbfbf',
    fontSize: 20,
  },

  trailerList: {
    paddingHorizontal: 16,
  },
  photoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  photoTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  photoAccent: {
    width: 3,
    height: 18,
    borderRadius: 999,
    backgroundColor: '#f4a21e',
    marginRight: 8,
  },

  photoTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },

  photoArrows: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  photoArrow: {
    color: '#bfbfbf',
    fontSize: 20,
  },

  photoList: {
    paddingHorizontal: 16,
  },
  text_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 16,
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
    marginBottom: 20,
  },
  sectionWrapper: {
    marginBottom: 30,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  commentTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentAccent: {
    width: 3,
    height: 18,
    borderRadius: 999,
    backgroundColor: '#f4a21e',
    marginRight: 8,
  },

  commentTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },

  commentArrows: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  commentArrow: {
    color: '#bfbfbf',
    fontSize: 12,
  },

  commentList: {
    paddingHorizontal: 16,
  },
});
