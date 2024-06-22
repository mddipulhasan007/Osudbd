import React, { useState, useEffect, useRef } from 'react';
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
import CustomImagePicker from './CustomImagePicker';
import ActionSheet from 'react-native-actions-sheet';

const areaOptions = [
  "Mirpur", "Mirpur 1", "Mirpur 2", "Mirpur 10", "Mirpur 11", "Mirpur 12", "Mohammadpur", "Farmgate", "Dhanmondi",
  "Shaymoli", "Adabor", "Gabtoli"
];

const IMG_PATH = '../../assets/img';

const RegistrationScreen = ({ navigation }) => {
  const actionSheetFilterRef = useRef();
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedSort, setSelectedSort] = useState(null); // Initialize as null

  const [isSelected, setSelection] = useState(true);
  const [filterActionSheetVisible, setFilterActionSheetVisible] = useState(false);

  const handleOpenFilterActionSheet = () => {
    actionSheetFilterRef.current?.setModalVisible(true);
  };

  const handleSortSelection = (index) => {
    setSelectedSort(index);
    setSelectedArea(areaOptions[index]); // Update the selected area
    actionSheetFilterRef.current?.setModalVisible(false); // Close the ActionSheet
  };

  const handlePressPhoneNumber = () => {
    Linking.openURL('tel:01739415848');
  };

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
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
    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.organization) newErrors.organization = 'Pharmacy is required';
    if (!form.organizationLicenseNo) newErrors.organizationLicenseNo = 'Pharmacy License No. is required';
    if (!form.organizationLicenseImage) newErrors.organizationLicenseImage = 'Pharmacy License Image or nid is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Form submitted', form);

    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 5, paddingTop: 20, paddingBottom: 0 }}>
        <Image style={styles.logo} source={require(`${IMG_PATH}/logo.png`)} />
        <Text style={{ fontSize: 18, color: "#000", fontWeight: 600 }}>Welcome</Text>
        <Text style={{ fontSize: 12, color: "#8a8a8a" }}>Create a new account</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.formContainer}>
          <CustomTextInput
            label="Full Name"
            value={form.fullName}
            onChangeText={(text) => handleInputChange('fullName', text)}
            placeholder="Enter your full name"
            error={errors.fullName}
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
            label="Password"
            value={form.password}
            onChangeText={(text) => handleInputChange('password', text)}
            placeholder="Enter your password"
            error={errors.password}
            secureTextEntry={true}
          />
          <CustomTextInput
            label="Pharmacy"
            value={form.organization}
            onChangeText={(text) => handleInputChange('organization', text)}
            placeholder="Enter your Pharmacy name"
            error={errors.organization}
          />
          <Text style={styles.label}>Area</Text>
          <TouchableOpacity style={styles.areaSelect} onPress={handleOpenFilterActionSheet}>
            <Text style={styles.areaSelectText}>{selectedArea || 'Select Area'}</Text>
          </TouchableOpacity>
          <CustomTextInput
            label="Pharmacy License No."
            value={form.organizationLicenseNo}
            onChangeText={(text) => handleInputChange('organizationLicenseNo', text)}
            placeholder="Enter your pharmacy license number"
            error={errors.organizationLicenseNo}
          />
          <CustomImagePicker
            label="Organization License Image or NID"
            value={form.organizationLicenseImage}
            onChangeImage={(uri) => handleInputChange('organizationLicenseImage', uri)}
            error={errors.organizationLicenseImage}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.submitButton} 
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 15, paddingTop: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} >
                <Text style={{ fontSize: 13, color: "#373737", textDecorationLine: "underline" }}>Have an account? Login Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 5 }} onPress={handlePressPhoneNumber} >
                <MaterialIcons name="call" size={20} color="#000" />
                <Text style={{ fontSize: 13, color: "#373737", textDecorationLine: "underline" }}>Call us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <ActionSheet ref={actionSheetFilterRef}>
        <Text style={[styles.actionSheetTitle, { textAlign: "center" }]}>Area</Text>
        <View style={{ padding: 20 }}>
            {areaOptions.map((option, index) => (
              <TouchableOpacity key={index} style={styles.actionSheetItemFilter} onPress={() => handleSortSelection(index)} >
                <Text style={{ color: selectedSort === index ? "#198754" : "#000" }}>{option}</Text>
                <MaterialIcons 
                  name={selectedSort === index ? "check-box" : "check-box-outline-blank"} 
                  size={20} 
                  color={selectedSort === index ? "#198754" : "#8a8a8a"} 
                />
              </TouchableOpacity>
            ))}
        </View>
      </ActionSheet>
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
  areaSelect: {
    height:45,
    width:"100%",
    borderWidth: 1,
    borderColor:"#8c8c8c",
    borderRadius: 5,
    backgroundColor:"#fff",
    marginBottom:10,
  },
  actionSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#000',
  },
  actionSheetItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  actionSheetItemFilter: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  areaSelectText: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
    textAlign: 'left',
    paddingHorizontal:10,
    color:"#333"
  },
});

export default RegistrationScreen;
