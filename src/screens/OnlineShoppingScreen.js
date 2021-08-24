import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native'


const OnlineShoppingScreen = ({ navigation }) => { 

  const handleOnPress = () => {
    navigation.navigate ('addtocart')
  };
  
  const handlePaymentSuccess = () => {
    navigation.navigate ('paymentsuccessful')
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.lgrcontain}>
        <View style={styles.txthdr}>
          <Text style={styles.text}>ONLINE SHOPPING</Text>

          <Text style={styles.lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          </Text>
    
        </View>

        <View style={styles.imgcontainer}>
          <Image style={styles.image} source ={require('../../assets/1.png')}>
          </Image>
        </View>

        <View style={styles.touch}>
          <TouchableOpacity onPress={handleOnPress} style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>

          
        <View style={styles.skiploader}>
          <View></View>
          <View style = {styles.navContainer}>
            <View style = {styles.btnstart}></View>
            <View style = {styles.lgbtn}></View>
            <View style = {styles.btnend}></View>
          </View>

          <TouchableOpacity onPress={handlePaymentSuccess} style = {styles.navSkip}>
            <Text style = {styles.navPrevious}>Skip</Text>
          </TouchableOpacity>
        </View>


      </View>

    </ScrollView>
  )
};

export default OnlineShoppingScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },

  lgrcontain:{
    flex:1,
    paddingVertical:18,
    paddingHorizontal:25,
  },
  txthdr: {
    marginTop: 75,
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
    alignItems:'center'
  },
  btn: {
    width:160,
    height: 55,
    backgroundColor: '#4d24db',
    borderRadius: 30,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
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
    // alignSelf: 'center',
  },
  navContainer:{
    flexDirection:"row",
    alignItems:"center",
    width: 47,
    justifyContent: 'space-between'
  },

  btnstart: {
    height: 8,
    width: 20,
    backgroundColor: '#480ca8',
    borderRadius: 50,
  },

  lgbtn: {
    width: 9,
    height: 7,
    backgroundColor: "#D3D3D3",
    borderRadius: 100,
  },

  btnend: {
    width: 9,
    height: 7,
    backgroundColor: "#D3D3D3",
    borderRadius: 100, 
  },


  navPrevious: {
    fontWeight: "bold",
    color: "grey"
  },
})
