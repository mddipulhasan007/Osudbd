import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomTextInput from './CustomTextInput';

const UserChangePasswordScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const [form, setForm] = useState({
    oldPassword: '',
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
    if (!form.oldPassword) newErrors.oldPassword = 'Old password is required';
    if (!form.newPassword) newErrors.newPassword = 'New password is required';
    if (!form.cnewPassword) newErrors.cnewPassword = 'Confirm new password is required';
    if (form.newPassword && form.cnewPassword && form.newPassword !== form.cnewPassword) {
      newErrors.cnewPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Form submitted', form);

    // Show success alert
    Alert.alert(
      'Success',
      'Your password has been updated successfully!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
        <Text style={{width:30}}></Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.formContainer}>
          <CustomTextInput
            label="Old Password"
            value={form.oldPassword}
            onChangeText={(text) => handleInputChange('oldPassword', text)}
            placeholder="Enter your old password"
            error={errors.oldPassword}
            secureTextEntry={true}
          />
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
            placeholder="Confirm your new password"
            error={errors.cnewPassword}
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.submitButton} 
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                Update
              </Text>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  formContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#198754",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 13,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: '600',
    textTransform: "uppercase",
    fontSize: 14,
    textAlign: "center",
  },
});

export default UserChangePasswordScreen;
