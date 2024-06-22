import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const IMG_PATH = '../../assets/img';

function UserAccSettingScreen({ navigation }) {
  const [selectedFontStyle, setSelectedFontStyle] = useState('small');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemoveAccount = () => {
    Alert.alert(
      'Account Delete',
      'Are you sure you want to delete your account?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  const handleFontStyleChange = (style) => {
    setSelectedFontStyle(style);
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#f0fffc', flex: 1 }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
        <TouchableOpacity onPress={handleBack} style={{ padding: 5 }}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#000', textAlign: 'center', marginVertical: 10 }}>
          Settings
        </Text>
        <Text style={{ width: 30 }}></Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>
              Language
            </Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity>
                <Text style={{ color: '#198795', fontSize: 14, borderWidth: 1, borderColor: '#198795', padding: 5, borderRadius: 100 }}>
                  EN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: '#198795', fontSize: 14, borderWidth: 1, borderColor: '#198795', padding: 5, borderRadius: 100 }}>
                  বাং
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>
              Font Style
            </Text>
            <FontAwesome name="themeisle" size={20} color="#000" />
          </View>
          <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-between', marginVertical: 10 }}>
            <TouchableOpacity
              style={[styles.radioButton, selectedFontStyle === 'small' && styles.radioButtonSelected]}
              onPress={() => handleFontStyleChange('small')}
            >
              <Text style={[styles.radioButtonText, selectedFontStyle === 'small' && styles.radioButtonTextSelected]}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, selectedFontStyle === 'big' && styles.radioButtonSelected]}
              onPress={() => handleFontStyleChange('big')}
            >
              <Text style={[styles.radioButtonText, selectedFontStyle === 'big' && styles.radioButtonTextSelected]}>Big</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, minHeight:40 }}>
            <Text style={{ fontWeight:500, color:"#198795", fontSize: selectedFontStyle === 'small' ? 14 : 16 }}>{selectedFontStyle === 'small' ? 'Osudbd text style small' : 'Osudbd text style big'}</Text>
          </View>
          <TouchableOpacity
            onPress={handleRemoveAccount}
            style={styles.menuItem}
          >
            <Text style={[styles.menuText, { color: 'red' }]}>
              Remove account
            </Text>
            <FontAwesome6 name="trash" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#198795',
    borderRadius: 100,
  },
  radioButtonSelected: {
    backgroundColor: '#198795',
  },
  radioButtonText: {
    color: '#198795',
  },
  radioButtonTextSelected: {
    color: '#fff',
  },
});

export default UserAccSettingScreen;
