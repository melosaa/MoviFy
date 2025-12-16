import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backGroundColor,
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    alignItems: 'center',
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
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    paddingTop: 20,
    gap: 10,
  },
  listContent: {
    paddingBottom: 120,
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
