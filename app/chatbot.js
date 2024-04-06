import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
  const [response, setResponse] = useState('');
  const queryRef = useRef('');

  const sendQuery = async () => {
    try {
      const res = await axios.post('YOUR_BACKEND_ENDPOINT', { query: queryRef.current });
      setResponse(res.data);
    } catch (error) {
      console.error('Error sending query:', error);
    }
  };

  return (
    <View>
      <TextInput
        onChangeText={text => queryRef.current = text}
        placeholder="Type your message..."
      />
      <Button title="Send" onPress={sendQuery} />
      {response ? <Text>{response}</Text> : null}
    </View>
  );
};

export default ChatScreen;
