import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
  },
  input_container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: '#rgb(65, 65, 65)',
    paddingVertical: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 15,
    tintColor: '#rgb(65, 65, 65)',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#rgb(65, 65, 65)',
  },
});
