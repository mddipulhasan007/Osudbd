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
  Linking,
  TouchableOpacity

} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IMG_PATH = '../../assets/img';

function NotificationDetailsScreen({ navigation }) {

  const handleBack = () => {
      navigation.goBack();
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1
    }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:10, paddingHorizontal:10 }}>
        <TouchableOpacity onPress={handleBack}>
            <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight:700, color:'#000', textAlign:'center' }}>
           Notification Details
        </Text>
        <Text></Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ padding:12 }}>
            <Text style={{ color:"#198754", fontSize:14, fontWeight:600, paddingBottom:5 }}>Limited Time Offer!</Text>
            <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>প্রিয় গ্রাহক,</Text>
            <Text style={{ color:"#000", fontSize:13, fontWeight:400, paddingBottom:10}} 
            >
              শুধুমাত্র Osudbd Ltd সকল প্লাটফর্ম থেকে কম দামে পাচ্ছেন "Empa 25mg" স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন । 
            </Text>
            <Text style={{ color:"#000", fontSize:13, fontWeight:400}}>
              "Empa 25mg" বিশেষ মূল্যছাড়ে পেতে এখনি অর্ডার করতে নিমক্ত ছবিতে ক্লিক করুন । 
            </Text>
            <Text style={{ color:"#000", fontSize:13, fontWeight:400, paddingBottom:10 }}>
              ধন্যবাদ,
            </Text>
            <Text style={{ color:"#000", fontSize:13, fontWeight:400 }}>
              ফার্মাসির প্রিয় বন্ধু
            </Text>
            <Text style={{ color:"#000", fontSize:13, fontWeight:400, paddingBottom:5 }}>
              Osudbd Ltd
            </Text>
            <Text style={{ color:"blue", fontSize:13, fontWeight:400, paddingBottom:20 }}
              onPress={() => Linking.openURL('https://osudbd.com/')}
            >
              Learn more
            </Text>
            <TouchableOpacity 
              style={{height:130, width:"100%"}} 
              onPress={() => navigation.navigate("MediDetailsScreen")}
            >
              <Image style={{
                width:"100%",
                height:"100%",
                resizeMode:"contain",
                borderRadius:5
              }}
               source={require(`${IMG_PATH}/special-offer/offer-banner1.png`)} />
            </TouchableOpacity>
        </View>
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
    gap:10,
    flexDirection:'row',
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

export default NotificationDetailsScreen;
