import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { launchImageLibrary } from 'react-native-image-picker';

const IMG_PATH = '../../assets/img';

function UserAccountScreen({ navigation }) {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePressPhoneNumber = () => {
    Linking.openURL('tel:01739415848');
  };

  const handleSelectPhoto = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        setProfilePhoto(uri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View>
        <Text style={styles.headerText}>
          Profile
        </Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.profileContainer}>
          <TouchableOpacity 
            onPress={handleSelectPhoto}
            style={styles.photoContainer}>
            {profilePhoto ? (
              <Image source={{ uri: profilePhoto }} style={styles.image} />
            ) : (
              <AntDesign name="user" size={20} color="#000" />
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.userInfoContainer}
            onPress={() => navigation.navigate("UserAccDetailsScreen")}
          >
            <View>
              <Text style={styles.userName}>
                Touhidul Islam
              </Text>
              <Text style={styles.userPhone}>
                01739415848
              </Text>
              <Text style={styles.userOrganization}>
               Touhid Pharmacy
              </Text>
            </View>
            <FontAwesome name="angle-right" size={40} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("UserAccSettingScreen")}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>
            Settings
          </Text>
          <AntDesign name="setting" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate("UserChangePasswordScreen")}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>
            Password Change
          </Text>
          <AntDesign name="lock" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handlePressPhoneNumber}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>
            Helpline
          </Text>
          <Feather name="help-circle" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate("UserWishlistScreen")}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>
            My Wishlist
          </Text>
          <AntDesign name="hearto" size={20} color="#000" />
        </TouchableOpacity>
      </ScrollView>
      <View>
        <Text style={{ textAlign:"center", color:"#000", fontWeight:500, lineHeight:16, fontSize:14, }}>Version 1.0.0</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={{ flexDirection:"row", justifyContent:"space-between", marginTop:6, borderTopWidth:1, borderTopColor:"red", padding:10,  }}
        >
          <Text style={{ color:"red", fontWeight:500, lineHeight:18, fontSize:14, }}>Logout</Text>
          <Feather name="log-out" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f0fffc',
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoContainer: {
    height: 70,
    width: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#cccccc',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  buttonText: {
    textAlign: 'center',
    color: '#cccccc',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 80,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  userPhone: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  userOrganization: {
    fontSize: 16,
    fontWeight: '600',
    color: '#198795',
    paddingTop: 10,
  },
  menuItem: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#198795',
  },
});

export default UserAccountScreen;
