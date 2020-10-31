import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RouteHeader from './components/RouteHeader';
import BMICalculator from './pages/BMICalculator';
import HomePage from './pages/HomePage';

const { Navigator, Screen } = createStackNavigator();

export default function Routes () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={ { headerShown: false, cardStyle: { backgroundColor: "#3498db" } } }>
        <Screen name="Home Page" component={HomePage} />
        <Screen name="BMI Calculator" component={BMICalculator} options={{
          headerShown: true,
          header: () => <RouteHeader title="Calculadora de IMC" />
        }} />
      </Navigator>
    </NavigationContainer>
  )
}