import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';


import {NavigationContainer} from '@react-navigation/native'

import {createStackNavigator} from '@react-navigation/stack'

 const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name="onlineshop" component={OnlineShoppingScreen}/>
        <Stack.Screen name="addtocart" component={AddToCartScreen}/>
        <Stack.Screen name="paymentsuccessful" component={PaymentSuccessfulScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
