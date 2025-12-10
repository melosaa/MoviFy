import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  sectionWrapper: {
    marginTop: 24,
  },
  text_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
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
    flex: 1,
  },
  rightContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: 'white',
    marginLeft: 8,
  },

  rightText: {
    color: 'white',
    marginLeft: 8,
  },
});
