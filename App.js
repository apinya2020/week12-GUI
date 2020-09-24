import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const LotsOfStyle=()=>{
  return(
    <View style={styles.container}>
      <Text style={{color:'red'}}>Hello</Text>
      <Text style={styles.bigBlue}>Big Blue</Text>
      <Text style={{color:'red'}}>Big Bike and Big Too</Text>
      <Text style={styles.bigBlue}>Big Too and Big Bike</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginTop:50,
    alignItems:'center',
  },
  bigBlue:{
    color:'blue',fontSize:30,fontWeight:'bold',
  }
})
export default LotsOfStyle