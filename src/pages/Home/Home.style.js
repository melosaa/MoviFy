import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: {
    backgroundColor: '#1F1F1F',
    flex: 1,
  },
  trends: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },
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

  contaniueHeader: {
    paddingVertical: 10,
  },
  carousel_wrapper: {
    paddingVertical: 20,
  },
});
