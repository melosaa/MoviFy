import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    maxHeight: 45,
  },
  input_container: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    marginHorizontal: 4,
  },
  icon: {
    marginRight: 5,
    width: 24,
    height: 24,
  },
  divider: {
    width: 1,
    height: 22,
    backgroundColor: '#3a3a3a',
    marginHorizontal: 10,
  },
  filterWrapper: {
    width: 37,
    height: 37,
    borderRadius: 8,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
