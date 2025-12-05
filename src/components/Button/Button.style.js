import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const base_style = {
  container: {
    backgroundColor: '#00897b',
    borderRadius: 8,
    padding: 8,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.orange,
    borderWidth: 1,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  title: {
    color: '#00897b',
    fontSize: 17,
    fontWeight: '600',
  },
};

export default {
  primary: StyleSheet.create({
    container: {
      ...base_style.container,
      backgroundColor: colors.orange,
    },
    button_container: base_style.button_container,
    title: {
      ...base_style.title,
      color: '#fff',
    },
    icon: {
      height: 24,
      width: 24,
    },
  }),

  secondary: StyleSheet.create({
    container: {
      ...base_style.container,
      backgroundColor: 'black',
      borderColor: colors.orange,
    },
    button_container: base_style.button_container,
    title: {
      ...base_style.title,
      color: colors.orange,
    },
  }),
};
