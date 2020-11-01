import React from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WeatherForecast from '../components/WeatherForecast';

function HomePage() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Ferramentas Diárias</Text>

      <WeatherForecast />

      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('BMI Calculator') }}>
        <MaterialCommunityIcons name="weight-kilogram" size={35} color="black" />
        <Text style={styles.buttonText}> Calcular IMC</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desenvolvido por{"\n"}Tiago Schulz Sansão &copy; 2020-{new Date().getFullYear()}
        </Text>
      </View>

    </SafeAreaView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C304A',
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    minWidth: "60%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: 'center',
    height: 60,
  },
  title: {
    color: '#27ae60',
    fontSize: 37,
    borderBottomColor: '#3498db',
    borderBottomWidth: 1,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 27,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  footer: {
    marginTop: 'auto',
    width: "100%",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
  },
  footerText: {
    color: "#ecf0f1",
    textShadowColor: 'black',
    textShadowRadius: 1,
    textAlign: 'center',
  }
})