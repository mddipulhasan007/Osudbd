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

const IMG_PATH = '../../assets/img';

function UserWishlistScreen({ navigation }) {

  const handleBack = () => {
    navigation.goBack();
  };
  
  // Show success alert
  const handleRemoveWishlist = () => {
    Alert.alert(
      'Remove Wishlist',
      'Are you sure you want remove from wishlist?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
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
          Wishlist
        </Text>
        <Text style={{width:30}}></Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ paddingVertical:15, paddingHorizontal:10}}>
          <TouchableOpacity onPress={() => navigation.navigate('MediDetailsScreen')} style={styles.mediList}>
            <View style={styles.mediListImgArea}>
                <View style={styles.mediListImgLeft}>
                    <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
                </View>
                <View style={styles.offerPercentArea}>
                    <Text style={styles.offerPercent}>2.5%</Text>
                </View>
            </View>
            <View style={styles.mediListCont}>
              <Text style={styles.mediCompanyName} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
              <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
              <View style={styles.pricesArea}>
                <View>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>৳500</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addToCartBtnArea} onPress={handleRemoveWishlist}>
                  <Text style={styles.addToCartBtn}>Remove from wishlist</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MediDetailsScreen')} style={styles.mediList}>
            <View style={styles.mediListImgArea}>
                <View style={styles.mediListImgLeft}>
                    <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m2.jpeg`)} />
                </View>
                <View style={styles.offerPercentArea}>
                    <Text style={styles.offerPercent}>0%</Text>
                </View>
            </View>
            <View style={styles.mediListCont}>
              <Text style={styles.mediCompanyName} numberOfLines={1} ellipsizeMode="tail">Squuare Pharmaceuticals Ltd.</Text>
              <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Bilastin 20mg Tablet 10Pcs</Text>
              <View style={styles.pricesArea}>
                <View>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳200</Text>
                    <Text style={styles.regularPrice}>৳300</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addToCartBtnArea} onPress={handleRemoveWishlist}>
                  <Text style={styles.addToCartBtn}>Remove from wishlist</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={{ paddingVertical:15, paddingHorizontal:10}}>
          <Image style={{ width:"100%", height:400, resizeMode:"contain" }} source={require(`${IMG_PATH}/empty-basket.jpeg`)} />
          <Text style={{ fontSize:14, color:"#000", fontWeight:500, textAlign:"center" }}>No Data Found</Text>
        </View> */}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mediList: {
    marginHorizontal:4,
    marginVertical:5,
    padding: 7,
    width: '98%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mediListSingle: {
    marginHorizontal:4,
    marginVertical:5,
    padding: 7,
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mediListImgArea: {
    width:"23%",
    height:75,
    justifyContent:'center',
    alignItems:'center',
  },
  mediListImgLeft: {
    width:"100%",
    height:"80%",
    borderWidth:1,
    borderColor:"#eaeaea",
    borderRadius:5,
    marginBottom:3,
    overflow:'hidden'
  },
  mediListImg: {
    width:"100%",
    height:'100%',
    resizeMode:"contain",
  },
  mediListCont: {
    width:"74%",
  },
  CatListCont: {
    alignSelf:'center',
  },
  mediCompanyName: {
    color: '#8a8a8a',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14,
  },
  mediTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    paddingTop:5,
    paddingBottom:15,
  },
  pricesArea: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  prices: {
    flexDirection:'row',
    alignItems:'center',
    gap:7,
    marginBottom:5,
  },
  offerPrice: {
    fontSize:12,
    color:'#000',
    fontWeight:'500',
    lineHeight:14,
  },
  regularPrice: {
    fontSize:11,
    color:'#8C8C8C',
    fontWeight:'600',
    lineHeight:13,
    textDecorationLine:'line-through',
  },
  offerPercentArea: {
    width:'100%',
    backgroundColor:'#eaeaea',
    borderRadius: 3,
    height:15,
    justifyContent:'center',
    alignItems:'center',
  },
  offerPercent: {
    fontSize:9,
    color:'red',
    fontWeight:'500',
  },
  addToCartBtnArea: {
    borderRadius: 4,
    backgroundColor: '#ffe6e6',
    height:26,
    width:150,
    justifyContent:'center',
  },
  addToCartBtn: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },

});

export default UserWishlistScreen;
