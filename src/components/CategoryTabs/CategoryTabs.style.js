import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    marginTop: 16,
  },
  tab: {
    minHeight: 30,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.lightBrown,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#FFFFFF80',
    fontSize: 13,
    fontWeight: '500',
  },
});
