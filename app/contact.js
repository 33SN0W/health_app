import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';

const ContactFormScreen = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can send the form data to your server or perform any other action
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Address:', address);
    console.log('Medical Condition:', medicalCondition);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Contact Us</Text>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter your address"
          multiline
          numberOfLines={3}
        />
        <Text style={styles.label}>Medical Condition:</Text>
        <TextInput
          style={[styles.input, styles.medicalInput]}
          value={medicalCondition}
          onChangeText={setMedicalCondition}
          placeholder="Describe your medical condition"
          multiline
          numberOfLines={5}
        />
        <Button
          title="Submit"
          onPress={handleSubmit}
          color="#30334c"
        />
        <Text style={styles.contactInfo}>
          For any inquiries, please contact us at: prateek21b@iiitg.ac.in
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaedf6',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#30334c',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#30334c',
  },
  input: {
    backgroundColor: '#b1c2db',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  medicalInput: {
    height: 120,
  },
  contactInfo: {
    marginTop: 20,
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});

export default ContactFormScreen;
