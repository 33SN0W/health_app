import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 // Importing the ContactFormScreen component
import styles from './app/styles'; // Assuming you have defined styles in a separate file
import { Button } from 'react-native';
import medlistScreen from './app/listmedicine';
import DiseasePredictionScreen from './app/diseasepredictionscreen';
import ContactFormScreen from './app/contact';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Health Prediction App' }}
        />
        {/* <Stack.Screen
          name="DiseasePrediction"
          component={DiseasePredictionScreen} // Using the ContactFormScreen component here
          options={{ title: 'Disease Prediction' }}
        /> */}
        <Stack.Screen
          name="medlist"
          component={medlistScreen} // Using the ContactFormScreen component here
          options={{ title: 'Medicine List' }}
        />
        {/* <Stack.Screen
          name="doctorlist"
          component={ContactFormScreen} // Using the ContactFormScreen component here
          options={{ title: 'List doctor' }}
        /> */}
        
        
        
        {/* <Stack.Screen
          name="ChatWithUs"
          component={medlistScreen} // Using the ContactFormScreen component here
          options={{ title: 'Chat with us' }}
        /> */}
        <Stack.Screen
        name="ContactForm"
        component={ContactFormScreen} // Using the ContactFormScreen component here
        options={{ title: 'Contact Us' }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Define HomeScreen component for the main screen
const HomeScreen = ({ navigation }) => {
  const handleContactUsPress = () => {
    navigation.navigate('ContactForm');

  };
  const handlemedlistPress = () => {
    navigation.navigate('medlist');
    
  };
  const handledoctorlistpress = () => {
    navigation.navigate('doctorlist');
    
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Health Prediction App</Text> */}
      <View style={styles.content}>
        <Text style={styles.description}>
          This app uses advanced algorithms and medical data to predict the likelihood of various diseases based on user input.{"\n\n"}
          Simply tap on one of the buttons below to start the prediction process.{"\n\n"}
          We also have a medicine list for you to check out if you need to find something specific for some symptom.{"\n\n"}
          And if you have any other medical query, then please let our chatbot guide you.
        </Text>

        <View style={styles.buttonContainer}>
          <Button title="Disease prediction" onPress={() => handleButtonPress(1)} color="#D37676" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="List medicines" onPress={handlemedlistPress} color="#D37676" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="List Doctor" onPress={handledoctorlistpress} color="#D37676" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Chat with us" onPress={() => handleButtonPress(3)} color="#D37676" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Contact us" onPress={handleContactUsPress} color="#D37676" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Health Prediction Inc.</Text>
      </View>
    </View>
  );
};

export default App;
