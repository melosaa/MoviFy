import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  infoWrapper: {
    flex: 1,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: '#B0B0B0',
    fontSize: 13,
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },

  starIcon: {
    width: 16,
    height: 16,
    marginRight: 2,
    tintColor: 'yellow',
  },
  commentText: {
    color: 'white',
    fontSize: 17,
    lineHeight: 20,
  },
});
