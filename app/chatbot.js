import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChatbotPage = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    // Send user input to the backend
    const response = await fetch('YOUR_BACKEND_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputText }),
    });

    if (response.ok) {
      const data = await response.json();
      // Update chat history with user input and backend response
      setChatHistory([...chatHistory, { user: inputText, bot: data.message }]);
      setInputText('');
    } else {
      console.error('Error:', response.statusText);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.queryContainer}>
        <Text style={styles.queryText}>Please write your query</Text>
      </View>
      <View style={styles.chatContainer}>
        {chatHistory.map((item, index) => (
          <View key={index} style={[styles.messageContainer, index % 2 === 0 ? styles.userMessageContainer : styles.botMessageContainer]}>
            <Text style={[styles.messageText, index % 2 === 0 ? styles.userMessageText : styles.botMessageText]}>{item.user}</Text>
            <Text style={[styles.messageText, index % 2 === 0 ? styles.userMessageText : styles.botMessageText]}>{item.bot}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#E3FEF7" // Placeholder text color
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#003C43', // Updated background color
  },
  queryContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  queryText: {
    color: '#FFFF00', // Yellow text color
    fontSize: 16,
    textAlign: 'center',
  },
  chatContainer: {
    flex: 1,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessageContainer: {
    backgroundColor: '#007AFF', // Blue color for user's message
  },
  botMessageContainer: {
    backgroundColor: '#4CD964', // Another shade of green for bot's message
  },
  messageText: {
    color: '#FFFFFF', // White text color
  },
  userMessageText: {
    fontWeight: 'bold',
  },
  botMessageText: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background color for input container
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 5, // Add shadow for better visibility
  },
  input: {
    flex: 1,
    color: '#FFFFFF', // White text color for input
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'transparent', // Transparent border color
  },
  sendButton: {
    backgroundColor: '#000000', // Black color for send button
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#FFFFFF', // White text color for send button text
  },
});

export default ChatbotPage;
