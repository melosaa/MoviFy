import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: '#1F1F1F',
  },
  left_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  header_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  left_icon: {
    width: 36,
    height: 36,
  },
  right_icon: {
    width: 20,
    height: 20,
  },
});
