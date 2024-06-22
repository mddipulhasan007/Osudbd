// SplashScreen.js
import React from 'react';
import { View, Image, ActivityIndicator, StatusBar } from 'react-native';
const IMG_PATH = '../../assets/img';

const SplashScreen = () => {
  return (
    <>
    <StatusBar translucent backgroundColor="transparent" />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{position:'relative', gap:50, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ height:45, width:250 }} source={require(`${IMG_PATH}/logo.png`)} />
        <Image style={{ height:150, width:200 }} source={require(`${IMG_PATH}/splash_img.png`)} />
        <ActivityIndicator size="large" style={{ position:'absolute', top: 100, }} />
      </View>
    </View>
    </>
  );
};

export default SplashScreen;
