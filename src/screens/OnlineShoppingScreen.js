import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'


export default function OnlineShoppingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>ONLINE SHOPPING</Text>

      <Text style={styles.lorem}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      </Text>
    
    
      <Image style={styles.image} source ={require('../../assets/1.png')}>
      </Image>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>

      <View style = {styles.navContainer}>
            <View style = {styles.btnstart}></View>
            <View style = {styles.lgbtn}></View>
            <View style = {styles.btnend}></View>
      </View>

      <TouchableOpacity style = {styles.navSkip}>
            <Text style = {styles.navPrevious}>Skip</Text>
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
    width: 350,
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
    marginHorizontal:100,
},

  btnText: {
    color: "white",
    fontSize: 22,
    fontWeight: 'bold'
  },

  btnstart: {
    borderRadius: 50,
    backgroundColor: '#4d24db',
    width: 15,
    marginTop: 80,
    alignSelf: "center",
    height: 8,
    marginRight: 30,
  },

  lgbtn: {
    backgroundColor: '#D3D3D3',
    width: 10,
    height: 8,
    alignSelf: 'center',
    marginLeft: 2,
    marginTop: -8,
    borderRadius: 30,
  },

  btnend: {
    backgroundColor: '#D3D3D3',
    width: 10,
    height: 8,
    alignSelf: 'center',
    marginLeft: 28,
    marginTop: -8,
    borderRadius: 30, 
  },

  navSkip: {
    alignSelf: "flex-end",
    marginRight: 20,
  },

  navPrevious: {
    alignSelf: "flex-end",
    marginTop: -11,
    fontWeight: 'bold',
    color: "#808080",
    fontSize: 14,
  },
})
