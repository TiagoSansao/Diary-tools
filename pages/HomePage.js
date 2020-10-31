import React from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomePage() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Ferramentas Diárias</Text>
      <TouchableOpacity onPress={() => { navigation.navigate('BMI Calculator') }}>
        <Text>Calcular IMC</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})