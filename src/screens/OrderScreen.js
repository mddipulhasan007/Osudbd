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

function OrderScreen({ navigation }) {

  return (
    <SafeAreaView style={{
      backgroundColor: '#ffffff',
      flex:1
    }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View>
        <Text style={{ fontSize: 20, paddingTop:10, fontWeight:700, color:'#000', textAlign:'center' }}>
          Order List
        </Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("OrderDetailsScreen")}>
          <View>
            <Text style={{ fontWeight: '700', color:'#000', fontSize:16 }}>ID : 000001 </Text>
            <Text><Text style={{ fontWeight: '700', color:'#000', }}>Order Date :</Text> Sun, 05 May, 2024</Text>
            <Text style={{ color:'#198754' }}><Text style={{ fontWeight: '700'}}>Delivery Date :</Text> Sun, 06 May, 2024</Text>
          </View>
          <View style={{ flexDirection:'column', width:'30%', gap:5, alignItems:'flex-end', paddingTop:4 }}>
              <Text style={styles.offerPrice}>৳ 400.00</Text>
              <Text style={{ color:'blue', fontWeight:700, fontSize:14, paddingTop:10}}>Processing</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("OrderDetailsScreen")}>
          <View>
          <Text style={{ fontWeight: '700', color:'#000', fontSize:16 }}>ID : 000002 </Text>
            <Text><Text style={{ fontWeight: 'bold' }}>Order Date :</Text> Sun, 29 April, 2024</Text>
            <Text style={{ color:'#198754' }}><Text style={{ fontWeight: 'bold' }}>Delivery Date :</Text> Sun, 06 May, 2024</Text>
          </View>
          <View style={{ flexDirection:'column', width:'30%', gap:5, alignItems:'flex-end', paddingTop:4 }}>
            <Text style={styles.offerPrice}>৳ 700.00</Text>
            <Text style={{ color:'black', fontWeight:700, fontSize:14, paddingTop:10}}>Refund</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("OrderDetailsScreen")}>
          <View>
          <Text style={{ fontWeight: '700', color:'#000', fontSize:16 }}>ID : 000003 </Text>
            <Text><Text style={{ fontWeight: 'bold' }}>Order Date :</Text> Sun, 05 May, 2024</Text>
            <Text style={{ color:'#198754' }}><Text style={{ fontWeight: 'bold' }}>Delivery Date :</Text> Sun, 06 May, 2024</Text>
          </View>
          <View style={{ flexDirection:'column', width:'30%', gap:5, alignItems:'flex-end', paddingTop:4 }}>
            <Text style={styles.offerPrice}>৳ 300.00</Text>
            <Text style={{ color:'red', fontWeight:700, fontSize:14, paddingTop:10}}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediList} onPress={() => navigation.navigate("OrderDetailsScreen")}>
          <View>
          <Text style={{ fontWeight: '700', color:'#000', fontSize:16 }}>ID : 000004 </Text>
            <Text><Text style={{ fontWeight: 'bold' }}>Order Date :</Text> Sun, 05 May, 2024</Text>
            <Text style={{ color:'#198754' }}><Text style={{ fontWeight: 'bold' }}>Delivery Date :</Text> Sun, 06 May, 2024</Text>
          </View>
          <View style={{ flexDirection:'column', width:'30%', gap:5, alignItems:'flex-end', paddingTop:4 }}>
            <Text style={styles.offerPrice}>৳ 500.00</Text>
            <Text style={{ color:'green', fontWeight:700, fontSize:14, paddingTop:10}}>Completed</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mediList: {
    marginHorizontal:9,
    marginVertical:8,
    padding: 10,
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
  offerPrice: {
    fontSize:15,
    color:'#000',
    fontWeight:'700',
    lineHeight:20,
  },
});

export default OrderScreen;
