import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Icon,
  Button,
  TextInput,
  Alert,
  TouchableOpacity

} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CustomTextInput from './CustomTextInput';
import CustomImagePicker from './CustomImagePicker';

const IMG_PATH = '../../assets/img';

function UserAccDetailsScreen({ navigation }) {

  const handleBack = () => {
    navigation.goBack();
  };

  const [form, setForm] = useState({
    firstName: 'Touhidul',
    lastName: 'Islam',
    phone: '01739415848',
    email: '',
    organization: '',
    organizationAddress: '',
    organizationLicenseNo: '',
    organizationLicenseImage: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on change
  };

  const handleSubmit = () => {
    // Validate form and set errors if any
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'First Name is required';
    if (!form.lastName) newErrors.lastName = 'Last Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.organization) newErrors.organization = 'Organization is required';
    if (!form.organizationAddress) newErrors.organizationAddress = 'Organization Address is required';
    if (!form.organizationLicenseNo) newErrors.organizationLicenseNo = 'Organization License No. is required';
    // if (!form.organizationLicenseImage) newErrors.organizationLicenseImage = 'Organization License Image is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Form submitted', form);

    // Show success alert
    Alert.alert(
      'Success',
      'Your Information update!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1
    }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{  flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:15 }}>
        <TouchableOpacity onPress={handleBack} style={{padding:5}}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight:700, color:'#000', textAlign:'center', marginVertical:10, }}>
          Profile Details
        </Text>
        <Text style={{width:30}}></Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ paddingVertical:15, paddingHorizontal:10}}>
          <CustomTextInput
            label="First Name"
            value={form.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
            placeholder="Enter your first name"
            error={errors.firstName}
          />
          <CustomTextInput
            label="Last Name"
            value={form.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
            placeholder="Enter your last name"
            error={errors.lastName}
          />
          <CustomTextInput
            label="Phone"
            value={form.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            placeholder="Enter your phone number"
            error={errors.phone}
          />
          <CustomTextInput
            label="Email"
            value={form.email}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter your email"
            error={errors.email}
          />
          <CustomTextInput
            label="Organization"
            value={form.organization}
            onChangeText={(text) => handleInputChange('organization', text)}
            placeholder="Enter your organization name"
            error={errors.organization}
          />
          <CustomTextInput
            label="Organization Address"
            value={form.organizationAddress}
            onChangeText={(text) => handleInputChange('organizationAddress', text)}
            placeholder="Enter your organization address"
            error={errors.organizationAddress}
          />
          <CustomTextInput
            label="Organization License No."
            value={form.organizationLicenseNo}
            onChangeText={(text) => handleInputChange('organizationLicenseNo', text)}
            placeholder="Enter your organization license number"
            error={errors.organizationLicenseNo}
          />
          <CustomImagePicker
            label="Organization License Image"
            value={form.organizationLicenseImage}
            onChangeImage={(uri) => handleInputChange('organizationLicenseImage', uri)}
            error={errors.organizationLicenseImage}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={{backgroundColor:"#198754" , width:"100%", borderRadius:10, paddingVertical:13, }} 
            onPress={handleSubmit}>
              <Text style={{color:"#fff" , fontWeight:600, textTransform:"uppercase", fontSize:14, textAlign:"center" }}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginBottom:10
  },
});

export default UserAccDetailsScreen;
