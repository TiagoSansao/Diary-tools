import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { AdMobBanner } from 'expo-ads-admob';
import { AD_BANNER_01_TESTE, HOME_PAGE_BANNER } from '@env';

import WeatherForecast from '../components/WeatherForecast';

function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ferramentas Diárias</Text>

      <WeatherForecast />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('BMI Calculator');
        }}
      >
        <MaterialCommunityIcons
          name='weight-kilogram'
          size={35}
          color='black'
        />
        <Text style={styles.buttonText}> Calcular IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Jokenpo');
        }}
      >
        <FontAwesome5 name='hand-scissors' size={35} color='black' />
        <Text style={styles.buttonText}> Jokenpô</Text>
      </TouchableOpacity>

      <AdMobBanner
        style={styles.advertisement}
        bannerSize='largeBanner'
        adUnitID={AD_BANNER_01_TESTE}
      ></AdMobBanner>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desenvolvido por{'\n'}Tiago Schulz Sansão &copy; 2020-
          {new Date().getFullYear()}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  advertisement: {
    marginTop: 'auto',
  },
  container: {
    backgroundColor: '#1C304A',
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    minWidth: 300,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
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
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
  },
  footerText: {
    color: '#ecf0f1',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textAlign: 'center',
  },
  title: {
    color: '#27ae60',
    fontSize: 37,
    borderBottomColor: '#3498db',
    borderBottomWidth: 1,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
});
