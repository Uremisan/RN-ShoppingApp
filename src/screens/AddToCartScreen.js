import React from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const AddToCartScreen = ({ navigation}) => {
  const handleOnPress = () => {
    navigation.navigate ('paymentsuccessful')
  };

  const handleOnlineShop = () => {
    navigation.navigate ('onlineshop')
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.lgrcontainer}>
        <View style={styles.txthdr}>
         <Text style={styles.text}>ADD TO CART</Text>

          <Text style={styles.lorem}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery
          </Text>
        </View>


        <View style={styles.imgcontainer}>
          <Image style={styles.image} source ={require('../../assets/2.png')}>
          </Image>
        </View>

        <View styles={styles.touch}>
          <TouchableOpacity onPress={handleOnPress}  style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.skiploader}>
          <TouchableOpacity
            onPress={handleOnlineShop}
            style={styles.navprevious}
          >
            <Text style={styles.PrevText}>Previous</Text>
          </TouchableOpacity>


          <View style = {styles.navContainer}>
            <View style = {styles.lgbtn}></View>
            <View style = {styles.btnstart}></View>
            <View style = {styles.btnend}></View>
          </View>

          <TouchableOpacity onPress={handleOnPress} style = {styles.navSkip}>
            <Text style = {styles.navSkips}>Skip</Text>
          </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
};

export default AddToCartScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  lgrcontainer: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  txthdr: {
    marginTop: 5,
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 8,
  },
  lorem: {
    fontSize: 19,
  },
  imgcontainer:{
    alignItems:'center'
  },
  image: {
    marginTop: 30,
    width: 350,
    height: 300,   
  },
  touch:{
    alignItems:'center',
  },

  btn: {
    width:165,
    height: 55,
    backgroundColor: '#4d24db',
    borderRadius: 30,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
  },

  btnText: {
    color: "white",
    fontSize: 22,
    fontWeight: 'bold'
  },

  skiploader:{
    marginTop: 70,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  PrevText:{
    fontWeight: "bold",
    color: "grey"
  },

  navContainer:{
    flexDirection:"row",
    alignItems:"center",
    width: 47,
    justifyContent: 'space-between'
  },
  lgbtn: {
    width: 9,
    height: 7,
    backgroundColor: "#D3D3D3",
    borderRadius: 100,
  },
  btnstart: {
    height: 8,
    width: 20,
    backgroundColor: '#480ca8',
    borderRadius: 50,
  },
  btnend: {
    width: 9,
    height: 7,
    backgroundColor: "#D3D3D3",
    borderRadius: 100, 
  },
 




  navSkips: {
    fontWeight: "bold",
    color: "grey"
  },


})
