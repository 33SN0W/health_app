// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  // header: {
  //   backgroundColor: '#8C6A5D',
  //   paddingVertical: 20,
  //   paddingLeft: 20,
  //   alignItems: 'flex-start',
  // },
  // headerText: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: '#8C6A5D',
  //   fontFamily: 'Lato',
  // },
  content: {
    // flex: 1,
    paddingHorizontal: 30,
    // paddingTop: 90,
    color:'#283618',
    alignItems: 'center',
  },
  // description: {
  //   fontSize: 200,
  //   color: '#283618',
  //   marginBottom: 20,
  //   fontFamily: 'Lato',
  // },
 
  // footer: {
  //   backgroundColor: '#c57b57ff',
  //   paddingVertical: 10,
  //   alignItems: 'center',
  // },
  // footerText: {
  //   color: '#9c0d38ff',
  //   fontFamily: 'Lato',
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dad7cd',
  },
  Text:{
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    color: '#344E41',
  },
  buttonContainer: {
    backgroundColor: '#8aa8a1ff',
    borderRadius: 30, // half of the desired button height for oval shape
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    width: 250,
    // alignContent: 'center',
    
  },
  buttonText: {
    color: '#DAD7CD', // text color
    fontSize: 16,
    textAlign: 'center',
  },
  customHeader: {
    height: 60, // Customize header height as needed
    backgroundColor: '#dad7cd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100, // Adjust the height as needed
    justifyContent: 'flex-end', // Align the content to the bottom
    alignItems: 'center', // Center horizontally
    paddingBottom: 20, // Add some padding at the bottom for spacing
    backgroundColor: '#dad7cd', 
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#344E41',
  },
  image: {flex: 1,
    resizeMode: 'cover', // Cover the entire container
    position: 'absolute',
    top:-250,
    left: 35,
    right: 0,
    bottom: 500,
    opacity: 0.2, // 
    width: '100%',
  }
});



