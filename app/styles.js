// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBC49F',
  },
  header: {
    backgroundColor: '#B0C5A4',
    paddingVertical: 20,
    paddingLeft: 20,
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Lato',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#4E4E4E',
    marginBottom: 20,
    fontFamily: 'Lato',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  footer: {
    backgroundColor: '#F1EF99',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#4E4E4E',
    fontFamily: 'Lato',
  },
});



