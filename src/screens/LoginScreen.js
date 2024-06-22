import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from './CustomTextInput';

const IMG_PATH = '../../assets/img';

const LoginScreen = ({ navigation, onLogin  }) => {

    const handlePressPhoneNumber = () => {
        Linking.openURL('tel:01739415848');
    };

  const [form, setForm] = useState({
    emailPhone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on change
  };

  const handleLogin = () => {
    // Validate form and set errors if any
    const newErrors = {};
    if (!form.emailPhone) newErrors.emailPhone = 'email or phone number is required';
    if (!form.password) newErrors.password = 'password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onLogin(); // Call this function when login is successful

    console.log('Form submitted', form);

    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{ flexDirection:"column", justifyContent:"center", alignItems:"center", gap:10, paddingTop:120, paddingBottom:10 }}>
        <Image style={styles.logo} source={require(`${IMG_PATH}/logo.png`)} />
        <Text style={{ fontSize:12, color:"#8a8a8a" }}>Sign in to continue</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.formContainer}>
          <CustomTextInput
            label="Email or Phone Number"
            value={form.emailPhone}
            onChangeText={(text) => handleInputChange('emailPhone', text)}
            placeholder="Enter your email or phone number"
            error={errors.emailPhone}
            secureTextEntry={false}
          />
          <CustomTextInput
            label="Password"
            value={form.password}
            onChangeText={(text) => handleInputChange('password', text)}
            placeholder="Enter your password"
            error={errors.password}
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.submitButton} 
              onPress={handleLogin}>
              <Text style={styles.submitButtonText}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection:"column", alignItems:"center", justifyContent:"center", gap:15, paddingTop:20, }}>
            <TouchableOpacity onPress={() => navigation.navigate("RegistrationScreen")} >
                <Text style={{ fontSize:13, color:"#373737", textDecorationLine: "underline"}}>Don't have an account yet? Register Now</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} >
                <Text style={{ fontSize:13, color:"#373737", textDecorationLine: "underline"}}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection:"row", alignItems:"center", gap:5 }} onPress={handlePressPhoneNumber} >
                <MaterialIcons name="call" size={20} color="#000" />
                <Text style={{ fontSize:13, color:"#373737", textDecorationLine: "underline"}}>Call us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f0fffc',
    flex: 1,
  },
  logo: {
    height: 30,
    width: 180,
  },
  formContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#198754",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 16,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: '600',
    textTransform: "uppercase",
    fontSize: 14,
    textAlign: "center",
  },
});

export default LoginScreen;
