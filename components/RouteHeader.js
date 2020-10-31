import React from 'react';
import { View, StyleSheet, Text, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

function RouteHeader({title}) {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={() => { navigation.goBack(); }}>
        <Feather name="arrow-left" size={24} color="#ecf0f1"/>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={{width: 25}} />

    </SafeAreaView>
  )
}

export default RouteHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#00CFFF',
    padding: 15,
    backgroundColor: "#06517d",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
})