import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Icon,
  Button

} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ListViewBrands, ListViewRelated } from './CommonScreen';
const IMG_PATH = '../../assets/img';

function MediDetailsScreen({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1,
    }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <View style={{paddingHorizontal:15, paddingBottom:50}}>
          <View style={styles.productImgArea}>
            <TouchableOpacity onPress={handleBack} style={styles.backLeftArrow}>
              <FontAwesome name="angle-left" size={25} color="white" />
            </TouchableOpacity>
            <Image style={styles.productImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
          </View>
          <View style={styles.mediListCont}>
            <Text style={styles.mediTitle}>Capsule Seclo 20mg (120 Pcs)</Text>
            <Text style={{ fontSize:11, color:'#198754', fontWeight:'700' }}>Montelikast</Text>
            <View style={{ flexDirection:'row',  gap:20, marginTop:15 }}>
              <View style={{ gap:5 }}>
                <View style={{ flexDirection:'row', gap:5, alignItems:'center' }}>
                  <MaterialIcons name="precision-manufacturing" size={12} color="#198754" />
                  <Text style={{ fontSize:12, color:'#000' }}>Manufacturer:</Text>
                </View>
                <Text style={styles.mediCompanyName} numberOfLines={1} ellipsizeMode="tail">SQUARE Pharmaceuticals PLC.</Text>
              </View>
              <View style={{ gap:5 }}>
                <View style={{ flexDirection:'row', gap:5, alignItems:'center' }}>
                    <FontAwesome6 name="truck-medical" size={11} color="#198754" />
                    <Text style={{ fontSize:12, color:'#000' }}>Delivery Date</Text>
                </View>
                <Text style={styles.mediDeliveryDate}>Wednesday, 27 March</Text>
              </View>
            </View>
            <View style={{ flexDirection:'row', gap: 10, alignItems:'center', marginVertical:15 }}>
              <Text 
                style={{ 
                  borderWidth:1,
                  borderColor:'red',
                  borderRadius:5,
                  color:"red",
                  fontSize:10,
                  lineHeight:16,
                  paddingHorizontal:10,
                  fontWeight:'600',
                }}
              >Flash</Text>
              <Text
                style={{ 
                  borderWidth:1,
                  borderColor:'red',
                  borderRadius:5,
                  color:"red",
                  fontSize:10,
                  lineHeight:16,
                  paddingHorizontal:10,
                  fontWeight:'600',
                }}
              >Trending</Text>
            </View>
            <View>
              <Text style={styles.singleTitle}>Alternative Brands</Text>
              <ListViewBrands navigation={navigation} />
            </View>
            <View>
              <Text style={styles.singleTitle}>Recomanded For You</Text>
              <ListViewRelated navigation={navigation} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.pricesArea}>
        <View>
          <View style={styles.prices}>
            <Text style={styles.offerPrice}>৳450.52</Text>
            <Text style={styles.regularPrice}>৳550.52</Text>
          </View>
        </View>
        <View style={styles.offerPercentArea}>
          <FontAwesome5 name="percentage" size={10} color="red" /> 
          <Text style={styles.offerPercent}>18.17%</Text>
        </View>
        <TouchableOpacity style={styles.addToCartBtnArea}>
            <Text style={styles.addToCartBtn}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productImgArea: {
    width:'100%',
    height:250,
    position:'relative',
    backgroundColor:'#ffffff',
    marginBottom:10,
  },
  productImg: {
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  backLeftArrow: {
    width:35,
    height:35,
    backgroundColor:"#9a9a9a",
    borderRadius:100,
    justifyContent:"center",
    alignItems:'center',
    position:'absolute',
    top:10,
    left:10,
    zIndex:2,
  },
  mediCompanyName: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  mediDeliveryDate: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  mediTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    paddingTop:5,
  },
  pricesArea: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingBottom:15,
    paddingTop:15,
    borderTopWidth:1,
    borderTopColor:'#eaeaea',
    backgroundColor:'#fff'
  },
  prices: {
    flexDirection:'column',
    alignItems:'center',
    gap:5,
  },
  offerPrice: {
    fontSize:16,
    color:'#000',
    fontWeight:'700',
    lineHeight:20,
  },
  regularPrice: {
    fontSize:14,
    color:'#8C8C8C',
    fontWeight:'600',
    lineHeight:18,
    textDecorationLine:'line-through',
  },
  offerPercentArea: {
    flexDirection:'row',
    alignItems:'center',
    gap:5
  },
  offerPercent: {
    fontSize:12,
    color:'red',
    fontWeight:'600',
  },
  addToCartBtnArea: {
    borderRadius: 6,
    backgroundColor: '#198754',
    height:45,
    width:140,
    justifyContent:'center',
  },
  addToCartBtn: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },
  singleTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    marginTop:20
  }
});

export default MediDetailsScreen;
