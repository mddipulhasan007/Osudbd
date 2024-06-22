import React, { useState } from 'react';
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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IMG_PATH = '../../assets/img';

function CartScreen({ navigation }) {

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Perform actions to place order
    // Assuming order placement was successful, set orderPlaced to true
    setOrderPlaced(true);
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#ffffff',
      flex:1
    }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View>
        <Text style={{ fontSize: 20, paddingTop:10, fontWeight:700, color:'#000', textAlign:'center' }}>
          Cart
        </Text>
      </View>
      {orderPlaced ? (
        <View
          style={{
            backgroundColor: '#ffffff',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            gap:20,
          }}>
            <View
              style={{
                paddingRight:30
              }}>
              <MaterialCommunityIcons name="truck-check-outline" size={200} color="#d1ffbd" />
            </View>
            <View
              style={{
                justifyContent:'center',
                alignItems:'center',
                gap:5, 
                marginBottom:50
              }}>
              <Text style={{ fontSize: 30, color: '#198754', fontWeight:700, lineHeight:30 }}>
              Congratulations!
              </Text>
              <Text style={{ fontSize: 16, fontWeight:700, lineHeight:22 }}>
                Your order place successfull !
              </Text>
              <Text style={{ fontSize: 14, fontWeight:400, lineHeight:22 }}>
                Thank you for your order, Your order is processing.
              </Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("Home"); setOrderPlaced(false); }}
              style={styles.addToCartBtnArea}>
              <Text style={styles.addToCartBtn}>Continue</Text>
            </TouchableOpacity>
        </View>  ) : (
        <>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{ backgroundColor:'orange', padding: 5, marginTop:10 }}>
            <Text style={{ color:'white' }}>You minimum order order limit per day is ৳500.00. Meet the limit or Add Express Delivery Coupon to Place Order</Text>
          </View>
          <Text style={{ color:'#000', fontWeight:600, textAlign:'center', paddingVertical:5 }}>Mon, 06 May, 2024</Text>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mediList}>
            <View style={styles.mediListImgArea}>
              <Image style={styles.mediListImg} source={require(`${IMG_PATH}/medichine/m1.png`)} />
            </View>
            <View style={styles.mediListCont}>
              <View style={styles.cntentArea}>
                <Text style={styles.catTitle} numberOfLines={1} ellipsizeMode="tail">Edruc Ltd.</Text>
                <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">Capsule Seclo 20mg (120 Pcs)</Text>
                <View style={styles.pricesArea}>
                  <View style={styles.prices}>
                    <Text style={styles.offerPrice}>৳400</Text>
                    <Text style={styles.regularPrice}>( ৳400 x 1 )</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection:'column', width:'13%', gap:5, alignItems:'center' }}>
                <TouchableOpacity>
                  <FontAwesome name='plus' size={20} color="#198754" />
                </TouchableOpacity>
                <Text style={{ color:"#000", fontSize:18, fontWeight:400 }}>1</Text>
                <TouchableOpacity>
                  <FontAwesome name='minus' size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View>
        <TouchableOpacity  onPress={handlePlaceOrder}
          style={{
            justifyContent:'center',
            alignItems:'center',
            flexDirection:"row",
            backgroundColor:'#198754',
            gap:5,
            borderRadius:5,
            height:40,
            margin:15
          }}>
          <Text style={styles.placeOrderBtntxt}>Place Order : ৳</Text>
          <Text style={styles.placeOrderBtntxt}>900.00</Text>
        </TouchableOpacity>
      </View>
      </>
      )}
      {/* <View
          style={{
            backgroundColor: '#ffffff',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            gap:30,
          }}>
            <View
              style={{
                paddingRight:30
              }}>
              <FontAwesome name="cart-plus" size={200} color="#d1ffbd" />
            </View>
            <View
              style={{
                justifyContent:'center',
                alignItems:'center',
                gap:5
              }}>
              <Text style={{ fontSize: 20, fontWeight:600, lineHeight:30 }}>
                Your Cart is Empty
              </Text>
              <Text style={{ fontSize: 14, fontWeight:400, lineHeight:22 }}>
                Search your medichine and add those to the cart
              </Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Home")}
             style={styles.addToCartBtnArea}>
              <Text style={styles.addToCartBtn}>Add Now</Text>
            </TouchableOpacity>
        </View> */}
    </SafeAreaView>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  addToCartBtnArea: {
    borderRadius: 8,
    backgroundColor: '#198754',
    height:35,
    width:90,
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
  placeOrderBtntxt: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  mediList: {
    marginHorizontal:9,
    marginVertical:8,
    padding: 5,
    width: '95%',
    gap:10,
    flexDirection:'row',
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
  mediListImgArea: {
    width:"20%",
    height:70,
    borderWidth:1,
    borderColor:'#eaeaea',
  },
  mediListImg: {
    width:"100%",
    height:'100%',
    resizeMode:"contain",
  },
  mediListCont:{
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
    minHeight:20,
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
    paddingTop:5
  },
  offerPrice: {
    fontSize:15,
    color:'#000',
    fontWeight:'500',
    lineHeight:20,
  },
  regularPrice: {
    fontSize:13,
    color:'#8C8C8C',
    fontWeight:'600',
    lineHeight:16,
  },
});