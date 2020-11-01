import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { WEATHER_API } from '@env';

const WeatherForecast = () => {

  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const getLocalizationPermission = async () => {
    let  { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      let locationApi = await Location.getCurrentPositionAsync();
      setLocation(locationApi);
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${locationApi["coords"].latitude}&lon=${locationApi["coords"].longitude}&appid=${WEATHER_API}&lang=pt_br&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
    } 
  }

  useEffect(() => {
    getLocalizationPermission();
  }, [])

  if (location === null || weatherData === null) {
    return (
      <TouchableOpacity style={styles.warnContainer} onPress={() => {getLocalizationPermission()}}>
        <Feather style={{marginLeft: 30}} name="alert-circle" size={47} color="#c0392b" />
        <Text style={styles.warnText}>É necessário nos ceder acesso a sua localização para que possamos mostrar dados sobre o tempo na sua região! Para isso, clique nesta caixa.</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.insideContainerLeft}>
        <Text style={styles.localText}>{weatherData.name}, {weatherData.sys.country}</Text>
        <Text style={styles.temperature}>{weatherData.main["temp"]}ºC</Text>
      </View>
      <View style={styles.insideContainerRight}>
        <Image source={{uri: `http://openweathermap.org/img/wn/${weatherData.weather[0]["icon"]}@2x.png`}} style={styles.weatherImg}/>
        <Text style={styles.skySituation}>{weatherData.weather[0]["description"]}</Text>
      </View>
    </View>
  );
}

export default WeatherForecast;

const styles = StyleSheet.create({
  container: {
    borderColor: '#cce2eb',
    borderWidth: 2,
    width: 300,
    marginTop: 20,
    backgroundColor: '#4093c5',
    flexDirection: "row",
  },
  insideContainerLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  insideContainerRight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    padding: 5,
  },
  localText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    margin: 3,
  },
  skySituation: {
    marginTop: -20,
    color: 'white',
    textAlign: 'center',
  },
  temperature: {
    borderBottomColor: '#85b7cf',
    borderBottomWidth: 1,
    borderTopColor: '#85b7cf',
    borderTopWidth: 1,
    color: '#3c4147',
    fontSize: 45,
  },
  weatherImg: {
    width: 100,
    height: 100,
  },

  // Warn

  warnContainer: {
    width: '78%',
    flexDirection: 'row',
    borderColor: '#c0392b',
    borderWidth: 3,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  warnText: {
    color: '#ecf0f1',
    marginLeft: 10,
    marginRight: 40,
    textAlign: "justify"
  },
})