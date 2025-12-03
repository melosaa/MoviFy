import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const base_style = {
  container: {
    backgroundColor: '#00897b',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.orange,
    borderWidth: 1,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#00897b',
    fontSize: 17,
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
