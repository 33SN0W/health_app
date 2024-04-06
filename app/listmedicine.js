import React, { useState } from 'react';
import { View, Button, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import dataset from './medicines.json';
import styles from './styles';

const FindMedicinesScreen = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Search logic based on the dataset
    const results = dataset.filter(item => {
      // Additional checks to prevent errors
      if (!item.Description || !item.Drug_Name) {
        return false; // Skip this item if Description or Drug_Name is missing
      }

      // Assuming the dataset has properties for symptoms and medicine names
      return (
        item.Description.toLowerCase().includes(query.toLowerCase()) ||
        item.Drug_Name.toLowerCase().includes(query.toLowerCase())
      );
    });
    setSearchResults(results);
    if (onSearch) {
      onSearch(results);
    }
  };
  
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{item.Drug_Name}</Text>
      <Text style={{ fontSize: 16 }}>Symptoms: {item.Description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DAD7CD' }}>
      {/* <View style={{ backgroundColor: '#DAD7CD', padding: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>List Medicines</Text>
      </View> */}

      <View style={{ backgroundColor: '#DAD7CD', padding: 10 }}>
        <Text style={{ fontSize: 18, textAlign: 'center',color:'#344E41', marginVertical: 5 }}>
          Enter symptoms or medicine name to find related medicines.
        </Text>

        <TextInput
          style={{ fontSize: 16, backgroundColor: '#DAD7CD', paddingHorizontal: 10, color: '#344E41', marginVertical: 5, textAlign: 'center' }}
          placeholder="Enter symptoms or medicine name"
          onChangeText={text => setQuery(text)}
          value={query}
        />
        <Button title="Search" onPress={handleSearch} color="#8aa8a1ff" style={{ marginVertical: 5 }} />
        {/* <CustomButton title="Search" onPress={handleSearch} /> */}

        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={{ marginTop: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default FindMedicinesScreen;
