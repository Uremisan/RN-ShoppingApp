import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function PaymentSuccessfulScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.text}>PAYMENT SUCCESSFUL</Text>

      <Text style={styles.lorem}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
      </Text>

      <Image style={styles.image} source ={require('../../assets/3.png')}>
      </Image>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.navPrev}>
            <Text style = {styles.navPrevious}>Previous</Text>
      </TouchableOpacity>

      <View style = {styles.navContainer}>
           <Text style = {styles.roundDeep}></Text>
           <Text style = {styles.rounds}></Text>
           <Text style = {styles.round}></Text>
      </View>



    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 120,
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
    marginHorizontal: 30,
  },
  lorem: {
    marginTop: 12,
    fontSize: 19,
    marginHorizontal:30,
  },
  image: {
    marginTop: 30,
    width: 370,
    height: 300,
    alignSelf: 'flex-start'
  },
  btn: {
    width:160,
    height: 55,
    backgroundColor: '#4d24db',
    borderRadius: 30,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:110,
    marginBottom: 30,
  },

  btnText: {
    color: "white",
    fontSize: 22,
    fontWeight: 'bold'
  },
  navPrevious:{
    alignSelf:'flex-start',
    marginRight: 280,
    marginTop: 40,
    fontWeight: 'bold',
    color: "#808080",
    fontSize: 14,
  },
  navPrev: {
    marginLeft: 20,
    marginTop: -5,
  },
  roundDeep: {
    backgroundColor: '#D3D3D3',
    width: 10,
    height: 8,
    alignSelf: 'center',
    marginRight: 40,
    marginTop: -20,
    borderRadius: 30,
  },
  rounds: {
    backgroundColor: '#D3D3D3',
    width: 10,
    height: 8,
    alignSelf: 'center',
    marginLeft: -10,
    marginTop: -8,
    borderRadius: 30, 
  },
  round: {
    borderRadius: 50,
    backgroundColor: '#4d24db',
    width: 15,
    marginTop: -8,
    alignSelf: "center",
    height: 8,
    marginRight: -22,
  },
  navContainer: {
    marginTop: 10,
  },
  
})
