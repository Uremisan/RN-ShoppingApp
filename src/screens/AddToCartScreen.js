import React from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

export default function AddToCartScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.text}>ADD TO CART</Text>

      <Text style={styles.lorem}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery
      </Text>

      <Image style={styles.image} source ={require('../../assets/2.png')}>
      </Image>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.navPrev}>
            <Text style = {styles.navPrevious}>Previous</Text>
      </TouchableOpacity>

      <View style = {styles.navContainer}>
            <View style = {styles.btnstart}></View>
            <View style = {styles.btnlarge}></View>
            <View style = {styles.btnend}></View>
      </View>
      <TouchableOpacity style = {styles.navSkip}>
            <Text style = {styles.navSkips}>Skip</Text>
      </TouchableOpacity>


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

  btnlarge: {
    borderRadius: 50,
    backgroundColor: '#4d24db',
    width: 20,
    marginTop: -8,
    alignSelf: "center",
    height: 8,
    marginRight: 3,
  },

  btnstart: {
    backgroundColor: '#D3D3D3',
    width: 10,
    height: 8,
    alignSelf: 'center',
    marginRight: 40,
    marginTop: -20,
    borderRadius: 30,
  },

  btnend: {
    backgroundColor: '#D3D3D3',
    width: 10,
    height: 8,
    alignSelf: 'center',
    marginLeft: 32,
    marginTop: -8,
    borderRadius: 30, 
  },
  navContainer: {
    marginTop: 10,
  },


  navSkip: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 77,
  },

  navSkips: {
    alignSelf: "flex-end",
    marginTop: -100,
    fontWeight: 'bold',
    color: "#808080",
    fontSize: 14,
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
})
