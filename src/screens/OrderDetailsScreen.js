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
  TouchableOpacity,
  Alert

} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IMG_PATH = '../../assets/img';

function OrderScreen({ navigation }) {
    const handleBack = () => {
        navigation.goBack();
    };

    const createTwoButtonAlert = () =>
    Alert.alert('Cancel Order', 'Are you sure Want Cancel?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1
    }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:10, paddingHorizontal:10 }}>
        <TouchableOpacity onPress={handleBack} style={styles.backLeftArrow}>
            <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight:700, color:'#000', textAlign:'center' }}>
          Order Details
        </Text>
        <TouchableOpacity onPress={createTwoButtonAlert}>
          <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:8 }}>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Order ID</Text>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:13 }}>000001</Text>
        </View>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:8 }}>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Order To</Text>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:13 }}>Osudbd</Text>
        </View>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:8, borderBottomWidth:1, borderBottomColor:"#ddd", marginBottom:10 }}>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Date</Text>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:13 }}>05-05-2024</Text>
        </View>
        <View style={styles.mediList}>
          <View style={styles.mediListImgArea}>
            <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
          </View>
          <View style={styles.mediListCont}>
            <View style={{ width:'70%'}}>
              <Text style={styles.mediTitle} numberOfLines={2} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
              <View style={styles.pricesArea}>
                <View style={styles.prices}>
                  <Text style={styles.offerPrice}>1 x 400.00</Text>
                  <Text style={{color:'red', fontSize:12, borderWidth:1, borderColor:'red', paddingHorizontal:2, borderRadius:5}}>10.00%</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection:'column', width:'30%', gap:2, alignItems:'center' }}>
               <Text style={{ color:"#000", fontSize:14, fontWeight:400, textDecorationLine:'line-through', }}>৳ 530.00</Text>
               <Text style={{ color:"red", fontSize:12, fontWeight:400 }}>৳ -30.00</Text>
               <Text style={{ color:"#000", fontSize:14, fontWeight:700 }}>৳ 500.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.mediList}>
          <View style={styles.mediListImgArea}>
            <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
          </View>
          <View style={styles.mediListCont}>
            <View style={{ width:'70%'}}>
              <Text style={styles.mediTitle} numberOfLines={2} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
              <View style={styles.pricesArea}>
                <View style={styles.prices}>
                  <Text style={styles.offerPrice}>1 x 400.00</Text>
                  <Text style={{color:'red', fontSize:12, borderWidth:1, borderColor:'red', paddingHorizontal:2, borderRadius:5}}>10.00%</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection:'column', width:'30%', gap:2, alignItems:'center' }}>
               <Text style={{ color:"#000", fontSize:14, fontWeight:400, textDecorationLine:'line-through', }}>৳ 425.00</Text>
               <Text style={{ color:"red", fontSize:12, fontWeight:400 }}>৳ -25.00</Text>
               <Text style={{ color:"#000", fontSize:14, fontWeight:700 }}>৳ 400.00</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:8, borderTopWidth:1, borderTopColor:"#ddd", marginTop:10 }}>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Amount</Text>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:13 }}>955.00</Text>
        </View>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:8 }}>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Discount(-)</Text>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:13 }}>55.00</Text>
        </View>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:8 }}>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Round(+/-)</Text>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:13 }}>-0.00</Text>
        </View>
        <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:8 }}>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:15 }}>Grand Total</Text>
            <Text style={{ fontWeight: '600', color:'#000', fontSize:13 }}>900.00</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    backLeftArrow: {
        width:25,
        height:25,
        backgroundColor:"#f4f4f4",
        borderRadius:100,
        justifyContent:"center",
        alignItems:'center',
    },
  mediList: {
    marginHorizontal:9,
    marginVertical:5,
    padding: 10,
    width: '95%',
    gap:10,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  mediListImgArea: {
    width:"18%",
    height:60,
    borderWidth:1,
    borderColor:'#eaeaea',
  },
  mediListImg: {
    width:"100%",
    height:'100%',
    resizeMode:"contain",
  },
  mediListCont:{
    width:'80%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  mediTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
    paddingTop:5,
    minHeight:30,
  },
  catTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    paddingTop:5,
    minHeight:20,
  },
  prices: {
    flexDirection:'row',
    alignItems:'center',
    gap:5,
    paddingTop:2
  },
  offerPrice: {
    fontSize:15,
    color:'#000',
    fontWeight:'400',
    lineHeight:20,
  },
  regularPrice: {
    fontSize:13,
    color:'#8C8C8C',
    fontWeight:'600',
    lineHeight:16,
  },
});

export default OrderScreen;
