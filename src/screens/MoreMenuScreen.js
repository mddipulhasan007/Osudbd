import React from 'react';
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
  TouchableOpacity

} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IMG_PATH = '../../assets/img';

function MoreMenuScreen({ navigation }) {

  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1
    }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{padding:20, gap:5}}>
        <Text style={{ color:"#000", fontSize:16, paddingLeft:25, fontWeight:600, borderBottomWidth:1, borderBottomColor:"#ddd", marginBottom:5 }}>More Menu</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserAccountScreen')}
          style={{ flexDirection:'row', alignItems:'center', gap:10, backgroundColor:"#fff", padding:20  }}
        >
          <FontAwesome name="user-o" size={20} color="#198754" />
          <Text style={{ color:"#198754", fontSize:16, fontWeight:600}} >Your Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}
          style={{ flexDirection:'row', alignItems:'center', gap:10, marginTop:10, backgroundColor:"#fff", padding:20 }}
        >
          <FontAwesome name="bell-o" size={20} color="#198754" />
          <Text style={{ color:"#198754", fontSize:16, fontWeight:600 }} >Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection:'row', alignItems:'center', gap:10, marginTop:10, backgroundColor:"#fff", padding:20 }}
        >
          <FontAwesome name="newspaper-o" size={20} color="#198754" />
          <Text style={{ color:"#198754", fontSize:16, fontWeight:600 }} >Osudbd Notice</Text>
        </TouchableOpacity>
      </View>
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
});

export default MoreMenuScreen;
