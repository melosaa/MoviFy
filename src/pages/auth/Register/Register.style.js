import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 50,
  },
  header: {
    marginTop: 30,
    fontSize: 160,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
    marginBottom: 40,
  },
  image_container: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 60,
  },
  button_container: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    marginBottom: 12,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    backgroundColor: '#rgb(65, 65, 65)',
    marginRight: 8,
  },
  rememberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  forgotText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginLeft: 5,
  },
});
