import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const IMG_PATH = '../../assets/img';

const DATA = [
  {
    id: '1',
    company_name: 'Edruc Ltd.',
    title: 'Capsule Seclo 20mg (120 Pcs)',
    image: require('../../assets/img/medichine/m1.png'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '2',
    company_name: 'Squuare Pharmaceuticals Ltd.',
    title: 'Bilastin 20mg Tablet 10Pcs',
    image: require('../../assets/img/medichine/m2.jpeg'),
    regular_price: '350',
    offer_price: '250',
    offer_percent: '20',
  },
  {
    id: '3',
    company_name: 'Incepta Pharmaceuticals Ltd.',
    title: 'Syrup Tulsi Plus (100ml)',
    image: require('../../assets/img/medichine/m3.jpeg'),
    regular_price: '450.20',
    offer_price: '390.20',
    offer_percent: '10.5',
  },
  {
    id: '4',
    company_name: 'Eskayef Pharmaceuticals Ltd.',
    title: 'Doxicap 100mg 10pcs',
    image: require('../../assets/img/medichine/m4.jpeg'),
    regular_price: '850.50',
    offer_price: '650.50',
    offer_percent: '25.5',
  },
  {
    id: '5',
    company_name: 'Drug International Limited.',
    title: 'Dermomix Cream 15mg',
    image: require('../../assets/img/medichine/m5.jpeg'),
    regular_price: '180.25',
    offer_price: '150.25',
    offer_percent: '10.25',
  },
  {
    id: '6',
    company_name: 'Renata Limited.',
    title: 'Capsule E Cap 400IU (60 Pcs)',
    image: require('../../assets/img/medichine/m6.jpeg'),
    regular_price: '500.52',
    offer_price: '460.52',
    offer_percent: '19.17',
  },
  {
    id: '7',
    company_name: 'ACME.',
    title: 'Syrup Gavisol Oral Suspension (500+2067+160)/10 ml (200 ml)',
    image: require('../../assets/img/medichine/m7.jpeg'),
    regular_price: '510.75',
    offer_price: '390.75',
    offer_percent: '25',
  },
  {
    id: '8',
    company_name: 'Advancing Possibilites.',
    title: 'Tablet Naproxen Plus (Mystic) 500+20mg (30 Pcs)',
    image: require('../../assets/img/medichine/m8.jpeg'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '9',
    company_name: 'Edruc Ltd.',
    title: 'Tablet Monus (MRP 525) 10mg (30 Pcs)',
    image: require('../../assets/img/medichine/m9.jpeg'),
    regular_price: '443.83',
    offer_price: '525',
    offer_percent: '15.46',
  },
  {
    id: '10',
    company_name: 'Opsonin Pharma',
    title: 'Oral Poder ORSaline-N (MRP 150) (25 Pcs)',
    image: require('../../assets/img/medichine/m10.jpeg'),
    regular_price: '610.50',
    offer_price: '550.50',
    offer_percent: '20.50',
  },
  {
    id: '11',
    company_name: 'Square Pharmaceuticals Ltd.',
    title: 'Filwel Gold Tablet (Pot) 30Pcs',
    image: require('../../assets/img/medichine/m11.jpeg'),
    regular_price: '750.75',
    offer_price: '680.75',
    offer_percent: '15.5',
  },
  {
    id: '12',
    company_name: 'Beximco Pharma Ltd.',
    title: 'Hexaplex 100ml',
    image: require('../../assets/img/medichine/m12.png'),
    regular_price: '18.25',
    offer_price: '19.25',
    offer_percent: '5.2',
  },
  {
    id: '13',
    company_name: 'IBN Pharmacy Ltd.',
    title: 'Moodnor Tablet 10pcs',
    image: require('../../assets/img/medichine/m13.jpeg'),
    regular_price: '460',
    offer_price: '370',
    offer_percent: '17',
  },
];

const Item = ({ title, company_name, regular_price, offer_price, offer_percent, image, navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate('MediDetailsScreen')} style={styles.mediList}>
      <View style={styles.mediListImgArea}>
          <View style={styles.mediListImgLeft}>
              <Image style={styles.mediListImg} source={image} />
          </View>
          <View style={styles.offerPercentArea}>
              <Text style={styles.offerPercent}>{offer_percent}%</Text>
          </View>
      </View>
      <View style={styles.mediListCont}>
        <Text style={styles.mediCompanyName} numberOfLines={1} ellipsizeMode="tail">{company_name}</Text>
        <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <View style={styles.pricesArea}>
          <View>
              <View style={styles.prices}>
                  <Text style={styles.offerPrice}>৳{offer_price}</Text>
                  <Text style={styles.regularPrice}>৳{regular_price}</Text>
              </View>
              <View style={{ flexDirection:'row', gap:5, alignItems:'center' }}>
                  <FontAwesome6 name="truck-medical" size={10} color="#198754" />
                  <Text style={{ fontSize:11 }}>Delivery: <Text style={{ fontWeight:'700' }}>Wed, 27 Mar</Text></Text>
              </View>
          </View>
          <TouchableOpacity style={styles.addToCartBtnArea}>
              <Text style={styles.addToCartBtn}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  </>
);

const NEWDATA = [
  {
    id: '1',
    company_name: 'Edruc Ltd.',
    title: 'Capsule Seclo 20mg (120 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '2',
    company_name: 'Squuare Pharmaceuticals Ltd.',
    title: 'Bilastin 20mg Tablet 10Pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '350',
    offer_price: '250',
    offer_percent: '20',
  },
  {
    id: '3',
    company_name: 'Incepta Pharmaceuticals Ltd.',
    title: 'Syrup Tulsi Plus (100ml)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '450.20',
    offer_price: '390.20',
    offer_percent: '10.5',
  },
  {
    id: '4',
    company_name: 'Eskayef Pharmaceuticals Ltd.',
    title: 'Doxicap 100mg 10pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '850.50',
    offer_price: '650.50',
    offer_percent: '25.5',
  },
  {
    id: '5',
    company_name: 'Drug International Limited.',
    title: 'Dermomix Cream 15mg',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '180.25',
    offer_price: '150.25',
    offer_percent: '10.25',
  },
  {
    id: '6',
    company_name: 'Renata Limited.',
    title: 'Capsule E Cap 400IU (60 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '500.52',
    offer_price: '460.52',
    offer_percent: '19.17',
  },
  {
    id: '7',
    company_name: 'ACME.',
    title: 'Syrup Gavisol Oral Suspension (500+2067+160)/10 ml (200 ml)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '510.75',
    offer_price: '390.75',
    offer_percent: '25',
  },
  {
    id: '8',
    company_name: 'Advancing Possibilites.',
    title: 'Tablet Naproxen Plus (Mystic) 500+20mg (30 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '9',
    company_name: 'Edruc Ltd.',
    title: 'Tablet Monus (MRP 525) 10mg (30 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '443.83',
    offer_price: '525',
    offer_percent: '15.46',
  },
  {
    id: '10',
    company_name: 'Opsonin Pharma',
    title: 'Oral Poder ORSaline-N (MRP 150) (25 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '610.50',
    offer_price: '550.50',
    offer_percent: '20.50',
  },
  {
    id: '11',
    company_name: 'Square Pharmaceuticals Ltd.',
    title: 'Filwel Gold Tablet (Pot) 30Pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '750.75',
    offer_price: '680.75',
    offer_percent: '15.5',
  },
  {
    id: '12',
    company_name: 'Beximco Pharma Ltd.',
    title: 'Hexaplex 100ml',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '18.25',
    offer_price: '19.25',
    offer_percent: '5.2',
  },
  {
    id: '13',
    company_name: 'IBN Pharmacy Ltd.',
    title: 'Moodnor Tablet 10pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '460',
    offer_price: '370',
    offer_percent: '17',
  },
];

const NewItem = ({ title, company_name, regular_price, offer_price, offer_percent, image, navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate('MediDetailsScreen')} style={styles.mediList}>
      <View style={styles.mediListImgArea}>
          <View style={styles.mediListImgLeft}>
              <Image style={styles.mediListImg} source={image} />
          </View>
          <View style={styles.offerPercentArea}>
              <Text style={styles.offerPercent}>{offer_percent}%</Text>
          </View>
      </View>
      <View style={styles.mediListCont}>
        <Text style={styles.mediCompanyName} numberOfLines={1} ellipsizeMode="tail">{company_name}</Text>
        <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <View style={styles.pricesArea}>
          <View>
              <View style={styles.prices}>
                  <Text style={styles.offerPrice}>৳{offer_price}</Text>
                  <Text style={styles.regularPrice}>৳{regular_price}</Text>
              </View>
              <View style={{ flexDirection:'row', gap:5, alignItems:'center' }}>
                  <FontAwesome6 name="truck-medical" size={10} color="#198754" />
                  <Text style={{ fontSize:11 }}>Delivery: <Text style={{ fontWeight:'700' }}>Wed, 27 Mar</Text></Text>
              </View>
          </View>
          <TouchableOpacity style={styles.addToCartBtnArea}>
              <Text style={styles.addToCartBtn}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  </>
);

export const ListView = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal:8, paddingBottom:20, backgroundColor:'#f0fffc' }}>
      <View 
          style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
          }}
      >
        <View >
          <Text></Text>
        </View>
        {/* <View style={{ flexDirection:'row', gap:10 }}>
          <TouchableOpacity>
            <FontAwesome name="filter" size={18} color="#8a8a8a" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="sort-amount-desc" size={16} color="#8a8a8a" />
          </TouchableOpacity>
        </View> */}
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        //horizontal={true}
      />
    </View>
  );
}

export const ListViewNew = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal:8, paddingBottom:20, backgroundColor:'#f0fffc' }}>
      <View 
          style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
          }}
      >
        <View >
          <Text></Text>
        </View>
        {/* <View style={{ flexDirection:'row', gap:10 }}>
          <TouchableOpacity style={{ padding:4, }} onPress={handleOpenFilterActionSheet}>
            <FontAwesome name="filter" size={18} color="#8a8a8a" />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding:4, }} onPress={handleOpenActionSheet}>
            <FontAwesome name="sort-amount-desc" size={16} color="#8a8a8a" />
          </TouchableOpacity>
        </View> */}
      </View>
      <FlatList
        data={NEWDATA}
        renderItem={({ item }) => <NewItem {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        //horizontal={true}
      />
    </View>
  );
}

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const ListViewFlash = ({ navigation }) => {
  const shuffledData = shuffleArray(DATA);
  return (
    <View style={{ paddingHorizontal:8, paddingBottom:20, backgroundColor:'#f0fffc' }}>
      <View 
          style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
          }}
      >
        <View >
          <Text></Text>
        </View>
        {/* <View style={{ flexDirection:'row', gap:10 }}>
          <TouchableOpacity>
            <FontAwesome name="filter" size={18} color="#8a8a8a" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="sort-amount-desc" size={16} color="#8a8a8a" />
          </TouchableOpacity>
        </View> */}
      </View>
      <FlatList
        data={shuffledData}
        renderItem={({ item }) => <Item {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        //horizontal={true}
      />
    </View>
  );
}

const BRDATA = [
  {
    id: '1',
    company_name: 'Edruc Ltd.',
    title: 'Capsule Seclo 20mg (120 Pcs)',
    image: require('../../assets/img/medichine/m1.png'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '2',
    company_name: 'Squuare Pharmaceuticals Ltd.',
    title: 'Bilastin 20mg Tablet 10Pcs',
    image: require('../../assets/img/medichine/m2.jpeg'),
    regular_price: '350',
    offer_price: '250',
    offer_percent: '20',
  },
  {
    id: '3',
    company_name: 'Incepta Pharmaceuticals Ltd.',
    title: 'Syrup Tulsi Plus (100ml)',
    image: require('../../assets/img/medichine/m3.jpeg'),
    regular_price: '450.20',
    offer_price: '390.20',
    offer_percent: '10.5',
  },
  {
    id: '4',
    company_name: 'Eskayef Pharmaceuticals Ltd.',
    title: 'Doxicap 100mg 10pcs',
    image: require('../../assets/img/medichine/m4.jpeg'),
    regular_price: '850.50',
    offer_price: '650.50',
    offer_percent: '25.5',
  },
  {
    id: '5',
    company_name: 'Drug International Limited.',
    title: 'Dermomix Cream 15mg',
    image: require('../../assets/img/medichine/m5.jpeg'),
    regular_price: '180.25',
    offer_price: '150.25',
    offer_percent: '10.25',
  },
  {
    id: '6',
    company_name: 'Renata Limited.',
    title: 'Capsule E Cap 400IU (60 Pcs)',
    image: require('../../assets/img/medichine/m6.jpeg'),
    regular_price: '500.52',
    offer_price: '460.52',
    offer_percent: '19.17',
  },
  {
    id: '7',
    company_name: 'ACME.',
    title: 'Syrup Gavisol Oral Suspension (500+2067+160)/10 ml (200 ml)',
    image: require('../../assets/img/medichine/m7.jpeg'),
    regular_price: '510.75',
    offer_price: '390.75',
    offer_percent: '25',
  },
  {
    id: '8',
    company_name: 'Advancing Possibilites.',
    title: 'Tablet Naproxen Plus (Mystic) 500+20mg (30 Pcs)',
    image: require('../../assets/img/medichine/m8.jpeg'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '9',
    company_name: 'Edruc Ltd.',
    title: 'Tablet Monus (MRP 525) 10mg (30 Pcs)',
    image: require('../../assets/img/medichine/m9.jpeg'),
    regular_price: '443.83',
    offer_price: '525',
    offer_percent: '15.46',
  },
  {
    id: '10',
    company_name: 'Opsonin Pharma',
    title: 'Oral Poder ORSaline-N (MRP 150) (25 Pcs)',
    image: require('../../assets/img/medichine/m10.jpeg'),
    regular_price: '610.50',
    offer_price: '550.50',
    offer_percent: '20.50',
  },
  {
    id: '11',
    company_name: 'Square Pharmaceuticals Ltd.',
    title: 'Filwel Gold Tablet (Pot) 30Pcs',
    image: require('../../assets/img/medichine/m11.jpeg'),
    regular_price: '750.75',
    offer_price: '680.75',
    offer_percent: '15.5',
  },
  {
    id: '12',
    company_name: 'Beximco Pharma Ltd.',
    title: 'Hexaplex 100ml',
    image: require('../../assets/img/medichine/m12.png'),
    regular_price: '18.25',
    offer_price: '19.25',
    offer_percent: '5.2',
  },
  {
    id: '13',
    company_name: 'IBN Pharmacy Ltd.',
    title: 'Moodnor Tablet 10pcs',
    image: require('../../assets/img/medichine/m13.jpeg'),
    regular_price: '460',
    offer_price: '370',
    offer_percent: '17',
  },
];

const BRItem = ({ title, company_name, regular_price, offer_price, offer_percent, image, navigation }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate('MediDetailsScreen')} style={styles.mediListSingle}>
      <View style={styles.mediListImgArea}>
          <View style={styles.mediListImgLeft}>
              <Image style={styles.mediListImg} source={image} />
          </View>
          <View style={styles.offerPercentArea}>
              <Text style={styles.offerPercent}>{offer_percent}%</Text>
          </View>
      </View>
      <View style={styles.mediListCont}>
        <Text style={styles.mediCompanyName} numberOfLines={1} ellipsizeMode="tail">{company_name}</Text>
        <Text style={styles.mediTitle} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <View style={styles.pricesArea}>
          <View>
              <View style={styles.prices}>
                  <Text style={styles.offerPrice}>৳{offer_price}</Text>
                  <Text style={styles.regularPrice}>৳{regular_price}</Text>
              </View>
              <View style={{ flexDirection:'row', gap:5, alignItems:'center' }}>
                  <FontAwesome6 name="truck-medical" size={10} color="#198754" />
                  <Text style={{ fontSize:11 }}>Delivery: <Text style={{ fontWeight:'700' }}>Wed, 27 Mar</Text></Text>
              </View>
          </View>
          {/* <TouchableOpacity style={styles.addToCartBtnArea}>
              <Text style={styles.addToCartBtn}>Add To Cart</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </TouchableOpacity>
  </>
);

export const ListViewBrands = ({ navigation }) => {
  const shuffledData = shuffleArray(BRDATA);
  return (
    <View>
      <FlatList
        data={shuffledData}
        renderItem={({ item }) => <BRItem {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
}

export const ListViewRelated = ({ navigation }) => {
  const shuffledData = shuffleArray(BRDATA);
  return (
    <View>
      <FlatList
        data={shuffledData}
        renderItem={({ item }) => <BRItem {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
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
    height:85,
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
    backgroundColor:'#f9dddb',
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
    backgroundColor: '#198754',
    height:26,
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

});

