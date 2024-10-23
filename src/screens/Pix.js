import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Pix({ route, navigation }) {
  const { balance, setBalance } = route.params;
  const [valuePix, setValuePix] = useState('');
  const [keyPix, setKeyPix] = useState('');

  const handleSendPix = () => {
    const value = parseFloat(valuePix);
    if (value <= balance) {
      setBalance(balance - value);
      navigation.goBack();
    } else {
      alert('Saldo insuficiente');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Chave PIX:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a chave PIX"
        value={keyPix}
        onChangeText={setKeyPix}
        placeholderTextColor='#fff'
      />
      <Text style={styles.label}>Valor do PIX:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        value={valuePix}
        keyboardType="numeric"
        onChangeText={setValuePix}
        placeholderTextColor='#fff'
      />
      <Button title="Enviar PIX" onPress={handleSendPix} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#fff'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    color: '#fff'
  },
});
