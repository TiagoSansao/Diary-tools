import React, { useState } from 'react';
import { 
  Share, 
  StyleSheet, 
  Text, 
  View, 
  Platform, 
  SafeAreaView, 
  TextInput, 
  StatusBar, 
  TouchableOpacity
 } from 'react-native';


export default function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  let result = weight.replace(',','.') / (height.replace(',','.') * height.replace(',','.'));
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

  const onShare = async () => {
    try {
      await Share.share({
        message: `O meu índice de massa corporal é ${result} e é classificado como ${degree}, você sabe qual é o seu? Caso não, instale agora este aplicativo:`
      });
    } catch (err) {
      alert(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <View style={styles.calculator}>
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
      </View>
      <View>
          <Text style={styles.results}>Resultado: {result.toFixed(2)}</Text>
          <Text style={styles.results}>Grau: {degree}</Text>
        </View>
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareText}>
          Compartilhar resultado
        </Text>
      </TouchableOpacity>
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
    backgroundColor: '#1C304A',
  },
  calculator: {
    width: '100%',
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
  results: {
    fontSize: 30,
    textAlign: "center",
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
  shareButton: {
    width: '65%',
    height: 50,
    backgroundColor: '#16a085',
    justifyContent: 'center',
    borderColor: '#2ecc71',
    borderWidth: 3,
    marginTop: 15,
  },
  shareText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 40,
    textAlign: "center",
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
    borderBottomColor: '#00CFFF',
    borderBottomWidth: 1,
  },
});
