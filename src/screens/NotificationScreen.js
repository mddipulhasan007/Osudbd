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

function NotificationScreen({ navigation }) {

  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1
    }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:10, paddingHorizontal:10 }}>
        <Text style={{ fontSize: 20, fontWeight:700, color:'#000', textAlign:'center' }}>
        Notifications
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: '600', color:'#000', fontSize:13, borderWidth:1, borderColor:'#ddd', padding:3, borderRadius:5 }}>Mark all as read</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#8a8a8a", fontSize:14, fontWeight:600, paddingBottom:5 }}>Limited Time Offer!</Text>
              <Text style={{ color:"#8a8a8a", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>10 minutes ago.</Text>
          </View>
          <Text style={{ color:"#8a8a8a", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#000", fontSize:14, fontWeight:600, paddingBottom:5 }}>Product of the day!</Text>
              <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>30 minutes ago.</Text>
          </View>
          <Text style={{ color:"#000", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#8a8a8a", fontSize:14, fontWeight:600, paddingBottom:5 }}>Limited Time Offer</Text>
              <Text style={{ color:"#8a8a8a", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>2 hour ago.</Text>
          </View>
          <Text style={{ color:"#8a8a8a", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#000", fontSize:14, fontWeight:600, paddingBottom:5 }}>Product of the day!</Text>
              <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>1 day ago.</Text>
          </View>
          <Text style={{ color:"#000", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#000", fontSize:14, fontWeight:600, paddingBottom:5 }}>Product of the day!</Text>
              <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>1 week ago.</Text>
          </View>
          <Text style={{ color:"#000", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#000", fontSize:14, fontWeight:600, paddingBottom:5 }}>Limited Time Offer</Text>
              <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>8 day ago.</Text>
          </View>
          <Text style={{ color:"#000", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#000", fontSize:14, fontWeight:600, paddingBottom:5 }}>Limited Time Offer</Text>
              <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>10 day ago.</Text>
          </View>
          <Text style={{ color:"#000", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("NotificationDetailsScreen")} >
          <View style={{ flexDirection:'row', justifyContent:"space-between" }}>
            <View>
              <Text style={{ color:"#000", fontSize:14, fontWeight:600, paddingBottom:5 }}>Product of the day!</Text>
              <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            </View>
            <Text style={{fontSize:10}}>1 Month ago.</Text>
          </View>
          <Text style={{ color:"#000", fontSize:13, fontWeight:400 }} 
            numberOfLines={1}
            ellipsizeMode="tail">
            শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mediList: {
    marginHorizontal:9,
    marginVertical:6,
    paddingVertical: 15,
    paddingHorizontal:10,
    paddingBottom:12,
    width: '95%',
    gap:0,
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default NotificationScreen;
