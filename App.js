import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './app/styles'; 
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Button } from 'react-native';
import medlistScreen from './app/listmedicine';
import DiseasePredictionScreen from './app/diseasepredictionscreen';
import ContactFormScreen from './app/contact';
import {Appearance} from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image  } from 'react-native';
import ChatScreen from './app/chatbot';
import GeneralSymptomScreen from './app/generalsymptoms';

const Stack = createStackNavigator();
const drawer = createDrawerNavigator();


  // const StartScreen = () => {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Health App</Text>
  //     </View>
  //   );
  // };

  // const App = () => {
  //   return (
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <NavigationContainer>
  //         <Stack.Navigator>
  //           <Stack.Screen
  //             name="Home"
  //             component={HomeScreen}
  //             options={{
  //               header: () => (
  //                 <View style={styles.customHeader}>
  //                   <Text style={styles.headerText}>Health Prediction System</Text>
  //                 </View>
  //               ),
  //             }}
  //           />
  //           <Stack.Screen
  //             name="medlist"
  //             component={medlistScreen}
  //             options={{ headerShown: true,
  //               header: () => (
  //                 <View style={styles.customHeader}>
  //                   <Text style={styles.headerText}>List medicines</Text>
  //                 </View>
  //               ), 
  //               }}
  //           />
  //           <Stack.Screen
  //             name="ContactForm"
  //             component={ContactFormScreen}
  //             options={{ headerShown: true,
  //               header: () => (
  //                 <View style={styles.customHeader}>
  //                   <Text style={styles.headerText}>Contact us</Text>
  //                 </View>
  //               ),  }}
  //           />
  //           <Stack.Screen
  //           name= "dplist"
  //           component={DiseasePredictionScreen}
  //           options= {{headerShown:true,
  //           header: ()=>(
  //             <View style={styles.customHeader}>
  //               <Text style={styles.headerText}>Disease Prediction System</Text>
  //             </View>
  //           )}}

  //           />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </SafeAreaView>
  //   );
  // };

  const App = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
              backgroundColor: '#DAD7CD', // Set header background color
            },
            headerTintColor: '#000', // Set header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Set header text style
            },


              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Medicine List" component={medlistScreen} />
            <Stack.Screen name="Contact Form" component={ContactFormScreen} />
            <Stack.Screen name="Disease Prediction System" component={DiseasePredictionScreen} />
            <Stack.Screen name="Chatbot" component={ChatScreen} />
            <Stack.Screen name="GeneralSymptoms" component={GeneralSymptomScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  };

const HomeScreen = ({ navigation }) => {
  const handleContactUsPress = () => {
    navigation.navigate('Contact Form');
  };
  
  const handlemedlistPress = () => {
    navigation.navigate('Medicine List');
  };

  const handledpPress =()=>
  {
    navigation.navigate('Disease Prediction System');
  
  };
  const handleChatBotPress = () => {
    navigation.navigate('Chatbot');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image
          source={require('./assets/health_iconl.png')} // Change path to your image
          style={styles.image} // Apply styles to your image if needed
        />
        <Text style={[styles.description, { color: '#344E41' }]}>
          This app uses advanced algorithms and medical data to predict the likelihood of various diseases based on user input.{"\n\n"}
          Simply tap on one of the buttons below to start the prediction process.{"\n\n"}
          We also have a medicine list for you to check out if you need to find something specific for some symptom.{"\n\n"}
          And if you have any other medical query, then please let our chatbot guide you.
        </Text>

        <CustomButton title="Disease prediction" onPress={handledpPress} />
        <CustomButton title="List medicines" onPress={handlemedlistPress} />
        <CustomButton title="List doctors" onPress={() => handleButtonPress(1)} />
        <CustomButton title="Chatbot" onPress={handleChatBotPress()} />
        <CustomButton title="Contact us" onPress={handleContactUsPress} />

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Â© 2024 PRATEEK Inc.</Text>
      </View>
    </View>
  );
};

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

const DrawerContent = () => (
  <View style={styles.drawerContent}>
    <Text style={styles.drawerItem}>Drawer Item 1</Text>
    <Text style={styles.drawerItem}>Drawer Item 2</Text>
    <Text style={styles.drawerItem}>Drawer Item 3</Text>
    {/* Add more drawer items as needed */}
  </View>
);

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Drawer.Navigator drawerContent={DrawerContent}>
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="medlist" component={medlistScreen} />
//           <Drawer.Screen name="ContactForm" component={ContactFormScreen} />
//           <Drawer.Screen name="Profile" component={ProfileScreen} /> {/* Add Profile screen */}
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

export default App;