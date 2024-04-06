import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import styles from './styles'; 
import { Button } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image  } from 'react-native';
const DiseasePredictionScreen = ({ navigation }) => {
  const handleButton1Press = () => {
    // Handle logic for button 1 press
  };
  const handleButton2Press = () => {
    // Handle logic for button 2 press
  };

  return (
    <View style={styles.container}>
    <Image
          source={require('C:/Users/user/projects/my-app/assets/health_iconl.png')} // Change path to your image
          style={styles.image} // Apply styles to your image if needed
        />
    <Text style={[styles.description, { color: '#344E41' }, {padding: 'auto'}]}>Please select the specific option you want to continue with</Text>
      <CustomButton title = "Specific disease" onPress={handleButton1Press}/>
      <CustomButton title = "General Symptoms" onPress={handleButton1Press}/>

     
    </View>
  );
};

const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DAD7CD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description:{
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: '',
    fontSize : 20,
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
  image: {flex: 1,
    resizeMode: 'cover', // Cover the entire container
    position: 'absolute',
    top:-82,
    left: 5.5,
    right: 0,
    bottom: 500,
    opacity: 0.2, // 
    width: '100%',
  }
});

export default DiseasePredictionScreen;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const DiseasePredictionScreen = ({ navigation }) => {
//   const handleButton1Press = () => {
//     // Handle logic for button 1 press
//   };

//   const handleButton2Press = () => {
//     // Handle logic for button 2 press
//   };

//   return (
//     <LinearGradient colors={['#DAD7CD', '#FFFFFF']} style={styles.container}>
//       <Text style={[styles.description, { color: '#344E41' }]}>Please select the specific option you want to continue with</Text>
//       <CustomButton title="Specific disease" onPress={handleButton1Press} />
//       <CustomButton title="General Symptoms" onPress={handleButton1Press} />
//     </LinearGradient>
//   );
// };

// const CustomButton = ({ title, onPress }) => (
//   <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
//     <Text style={styles.buttonText}>{title}</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   description: {
//     marginBottom: 20,
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   buttonContainer: {
//     backgroundColor: '#8aa8a1ff',
//     borderRadius: 30,
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     marginBottom: 10,
//     width: 250,
//   },
//   buttonText: {
//     color: '#DAD7CD',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default DiseasePredictionScreen;
