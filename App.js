import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, TextInput, StatusBar, } from 'react-native';


export default function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  let result = weight.replace(',','.') / (height * height);
  let degree = 'pendente';

  if (result < 18.5) {
    degree = 'magreza';
  } else if (result >= 18.5 && result < 24.9) {
    degree = 'normal';
  } else if (result >= 24.9 && result < 30) {
    degree = 'sobrepeso';
  } else if (result >= 30 && result < 39.9) {
    degree = 'obesidade';
  } else if (result >= 39.9){
    degree = 'obesidade grave';
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Altura (ex: 1,75)</Text>
          <TextInput 
            placeholderTextColor="#cccac4" 
            keyboardType="numeric" 
            style={styles.input} 
            placeholder="Height (meters)"
            value={height}
            onChangeText={(newValue) => setHeight(newValue)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Peso (ex: 65,50)</Text>
          <TextInput 
            placeholderTextColor="#cccac4" 
            keyboardType="numeric" 
            style={styles.input} 
            placeholder="Weight (kilograms)"
            value={weight}
            onChangeText={(newValue) => setWeight(newValue)}
          />
        </View>
        <Text style={styles.title}>Resultado: {result.toFixed(2)}</Text>
        <Text style={styles.title}>Grau: {degree}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  calculator: {
    width: '100%',
    backgroundColor: '#1C304A',
    alignItems: 'center',
    paddingBottom: 10,
  },
  inputContainer: {
    width: '65%',
    margin: 10,
  },
  input: {
    width: '100%',
    marginTop: 3,
    height: 60,
    backgroundColor: '#046B99',
    padding: 15,
    color: 'white',
    borderColor: '#B3EFFF',
    borderWidth: 1,
  },
  label: {
    fontSize: 13,
    color: 'white',
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
});
