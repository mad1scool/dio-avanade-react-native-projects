import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'



const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle(oldToggle => {
      return !oldToggle
    })
  }

  useEffect(() => {
    Torch.switchState(toggle)
  }, [toggle])

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => {
        return !oldToggle
      })
    })
    
    return () => { subscription.remove() }
  }, [])

  return <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity 
      onPress={handleToggleChange}>
      <Image 
      source={toggle ? require('./assets/icons/792429_ori__20210612232810_deyverson.png') : require('./assets/icons/kisspng-sociedade-esportiva-palmeiras-campeonato-brasileir-5b10b5ef1b1c57.0096726815278218071111.png')} 
      style={toggle ? style.lightOn : style.lightOff} />

      <Image 
      source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')} 
      style={toggle ? style.lightOn : style.lightOff} />
    </TouchableOpacity>

  </View>;
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 150,
    width: 150
  },

  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    //tintColor: 'white',
    height: 150,
    width: 150
  },

});