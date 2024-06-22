import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const CustomImagePicker = ({ label, value, onChangeImage, error }) => {
  const handleSelectImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        onChangeImage(uri);
      }
    });
  };

  // const handleCaptureImage = () => {
  //   launchCamera({}, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       const uri = response.assets[0].uri;
  //       onChangeImage(uri);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ flexDirection:"row", }}>
        <TouchableOpacity style={styles.selectImgbutton} onPress={handleSelectImage}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={handleCaptureImage}>
          <Text style={styles.buttonText}>Capture Image</Text>
        </TouchableOpacity> */}
        {value ? (
          <Image source={{ uri: value }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#000',
  },
  selectImgbutton: {
    width:"60%",
    borderWidth:1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    height:50,
    backgroundColor:"#fff"
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    lineHeight:25
  },
  image: {
    width: 70,
    height: 50,
    marginTop: 5,
    marginLeft:40,
    borderRadius:5
  },
  placeholder: {
    marginTop: 10,
    fontSize: 14,
    color: '#8c8c8c',
    lineHeight:40,
    paddingLeft:10
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },
});

export default CustomImagePicker;
