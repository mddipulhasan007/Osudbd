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

const CreateNewPassScreen = ({ navigation }) => {

    const handlePressPhoneNumber = () => {
        Linking.openURL('tel:01739415848');
    };

  const [form, setForm] = useState({
    newPassword: '',
    cnewPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on change
  };

  const handleSubmit = () => {
    // Validate form and set errors if any
    const newErrors = {};
    if (!form.newPassword) newErrors.newPassword = 'New password is required';
    if (!form.cnewPassword) newErrors.cnewPassword = 'Confirm new password is required';
    if (form.newPassword && form.cnewPassword && form.newPassword !== form.cnewPassword) {
      newErrors.cnewPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Form submitted', form);

    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{ flexDirection:"column", justifyContent:"center", alignItems:"center", gap:10, paddingTop:100, paddingBottom:10 }}>
        <Image style={styles.logo} source={require(`${IMG_PATH}/logo.png`)} />
        <Text style={{ fontSize: 18, color: "#000", fontWeight: 600, marginTop:30 }}>Create your new password</Text>
        <Text style={{ fontSize: 12, color: "#8a8a8a", paddingHorizontal:50, textAlign:"center" }}>This new password will be your main user password.</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.formContainer}>
          <CustomTextInput
            label="New Password"
            value={form.newPassword}
            onChangeText={(text) => handleInputChange('newPassword', text)}
            placeholder="Enter your new password"
            error={errors.newPassword}
            secureTextEntry={true}
          />
          <CustomTextInput
            label="Confirm New Password"
            value={form.cnewPassword}
            onChangeText={(text) => handleInputChange('cnewPassword', text)}
            placeholder="Enter your confirm new password"
            error={errors.cnewPassword}
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.submitButton} 
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection:"column", alignItems:"center", justifyContent:"center", gap:15, paddingTop:20, }}>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} >
                <Text style={{ fontSize:13, color:"#373737", textDecorationLine: "underline"}}>Back to Login</Text>
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

export default CreateNewPassScreen;
