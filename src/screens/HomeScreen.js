import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const IMG_PATH = '../../assets/img';

const images = [
  require('../../assets/img/banner_img_3.jpg'),
  require('../../assets/img/banner_img_0.jpg'),
  require('../../assets/img/banner_img_1.jpg'),
];


const DATA = [
  {
    id: '1',
    title: 'Capsule Seclo 20mg (120 Pcs)',
    image: require('../../assets/img/medichine/m1.png'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '2',
    title: 'Bilastin 20mg Tablet 10Pcs',
    image: require('../../assets/img/medichine/m2.jpeg'),
    regular_price: '350',
    offer_price: '250',
    offer_percent: '20',
  },
  {
    id: '3',
    title: 'Syrup Tulsi Plus (100ml)',
    image: require('../../assets/img/medichine/m3.jpeg'),
    regular_price: '450.20',
    offer_price: '390.20',
    offer_percent: '10.5',
  },
  {
    id: '4',
    title: 'Doxicap 100mg 10pcs',
    image: require('../../assets/img/medichine/m4.jpeg'),
    regular_price: '850.50',
    offer_price: '650.50',
    offer_percent: '25.5',
  },
  {
    id: '5',
    title: 'Dermomix Cream 15mg',
    image: require('../../assets/img/medichine/m5.jpeg'),
    regular_price: '180.25',
    offer_price: '150.25',
    offer_percent: '10.25',
  },
  {
    id: '6',
    title: 'Capsule E Cap 400IU (60 Pcs)',
    image: require('../../assets/img/medichine/m6.jpeg'),
    regular_price: '500.52',
    offer_price: '460.52',
    offer_percent: '19.17',
  },
  {
    id: '7',
    title: 'Syrup Gavisol Oral Suspension (500+2067+160)/10 ml (200 ml)',
    image: require('../../assets/img/medichine/m7.jpeg'),
    regular_price: '510.75',
    offer_price: '390.75',
    offer_percent: '25',
  },
  {
    id: '8',
    title: 'Tablet Naproxen Plus (Mystic) 500+20mg (30 Pcs)',
    image: require('../../assets/img/medichine/m8.jpeg'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '9',
    title: 'Tablet Monus (MRP 525) 10mg (30 Pcs)',
    image: require('../../assets/img/medichine/m9.jpeg'),
    regular_price: '443.83',
    offer_price: '525',
    offer_percent: '15.46',
  },
  {
    id: '10',
    title: 'Oral Poder ORSaline-N (MRP 150) (25 Pcs)',
    image: require('../../assets/img/medichine/m10.jpeg'),
    regular_price: '610.50',
    offer_price: '550.50',
    offer_percent: '20.50',
  },
  {
    id: '11',
    title: 'Filwel Gold Tablet (Pot) 30Pcs',
    image: require('../../assets/img/medichine/m11.jpeg'),
    regular_price: '750.75',
    offer_price: '680.75',
    offer_percent: '15.5',
  },
  {
    id: '12',
    title: 'Hexaplex 100ml',
    image: require('../../assets/img/medichine/m12.png'),
    regular_price: '18.25',
    offer_price: '19.25',
    offer_percent: '5.2',
  },
  {
    id: '13',
    title: 'Moodnor Tablet 10pcs',
    image: require('../../assets/img/medichine/m13.jpeg'),
    regular_price: '460',
    offer_price: '370',
    offer_percent: '17',
  },
];

const Item = ({ title, regular_price, offer_price, offer_percent, image, navigation, isLastItem }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate('MediDetailsScreen')} style={styles.mediList}>
      <View style={styles.mediListImgArea}>
        <Image style={styles.mediListImg} source={image} />
      </View>
      <View style={styles.mediListCont}>
        <Text style={styles.mediTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
        <View style={styles.pricesArea}>
          <View style={styles.prices}>
            <Text style={styles.offerPrice}>৳{offer_price}</Text>
            <Text style={styles.regularPrice}>৳{regular_price}</Text>
          </View>
          <View style={styles.offerPercentArea}>
            <Text style={styles.offerPercent}>{offer_percent}%</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCartBtnArea}>
          <Text style={styles.addToCartBtn}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    {isLastItem && (
      <TouchableOpacity onPress={() => navigation.navigate('Shortcuts', { screen: 'ShortcutScreen', params: { initialTab: 'TRENDING' } })} style={styles.mediList}>
        <View style={styles.seeAllArea}>
          <FontAwesome name="arrow-circle-o-right" size={30} color="#198754" />
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </TouchableOpacity>
    )}
  </>
);

const NEWDATA = [
  {
    id: '1',
    title: 'Capsule Seclo 20mg (120 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '2',
    title: 'Bilastin 20mg Tablet 10Pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '350',
    offer_price: '250',
    offer_percent: '20',
  },
  {
    id: '3',
    title: 'Syrup Tulsi Plus (100ml)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '450.20',
    offer_price: '390.20',
    offer_percent: '10.5',
  },
  {
    id: '4',
    title: 'Doxicap 100mg 10pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '850.50',
    offer_price: '650.50',
    offer_percent: '25.5',
  },
  {
    id: '5',
    title: 'Dermomix Cream 15mg',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '180.25',
    offer_price: '150.25',
    offer_percent: '10.25',
  },
  {
    id: '6',
    title: 'Capsule E Cap 400IU (60 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '500.52',
    offer_price: '460.52',
    offer_percent: '19.17',
  },
  {
    id: '7',
    title: 'Syrup Gavisol Oral Suspension (500+2067+160)/10 ml (200 ml)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '510.75',
    offer_price: '390.75',
    offer_percent: '25',
  },
  {
    id: '8',
    title: 'Tablet Naproxen Plus (Mystic) 500+20mg (30 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '550.52',
    offer_price: '450.52',
    offer_percent: '18.17',
  },
  {
    id: '9',
    title: 'Tablet Monus (MRP 525) 10mg (30 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '443.83',
    offer_price: '525',
    offer_percent: '15.46',
  },
  {
    id: '10',
    title: 'Oral Poder ORSaline-N (MRP 150) (25 Pcs)',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '610.50',
    offer_price: '550.50',
    offer_percent: '20.50',
  },
  {
    id: '11',
    title: 'Filwel Gold Tablet (Pot) 30Pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '750.75',
    offer_price: '680.75',
    offer_percent: '15.5',
  },
  {
    id: '12',
    title: 'Hexaplex 100ml',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '18.25',
    offer_price: '19.25',
    offer_percent: '5.2',
  },
  {
    id: '13',
    title: 'Moodnor Tablet 10pcs',
    image: require('../../assets/img/new_product.jpg'),
    regular_price: '460',
    offer_price: '370',
    offer_percent: '17',
  },
];

const NewItem = ({ title, regular_price, offer_price, offer_percent, image, navigation, isLastNewItem }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate('MediDetailsScreen')} style={styles.mediList}>
      <View style={styles.mediListImgArea}>
        <Image style={styles.mediListImg} source={image} />
      </View>
      <View style={styles.mediListCont}>
        <Text style={styles.mediTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
        <View style={styles.pricesArea}>
          <View style={styles.prices}>
            <Text style={styles.offerPrice}>৳{offer_price}</Text>
            <Text style={styles.regularPrice}>৳{regular_price}</Text>
          </View>
          <View style={styles.offerPercentArea}>
            <Text style={styles.offerPercent}>{offer_percent}%</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCartBtnArea}>
          <Text style={styles.addToCartBtn}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    {isLastNewItem && (
      <TouchableOpacity onPress={() => navigation.navigate('Shortcuts', { screen: 'ShortcutScreen', params: { initialTab: 'NEW' } })} style={styles.mediList}>
        <View style={styles.seeAllArea}>
          <FontAwesome name="arrow-circle-o-right" size={30} color="#198754" />
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </TouchableOpacity>
    )}
  </>
);

const MANUDATA = [
  {
    id: '1',
    image: require('../../assets/img/manufacture/manu1.jpeg'),
  },
  {
    id: '2',
    image: require('../../assets/img/manufacture/manu3.png'),
  },
  {
    id: '3',
    image: require('../../assets/img/manufacture/manu2.png'),
  },
  {
    id: '4',
    image: require('../../assets/img/manufacture/manu4.png'),
  },
  {
    id: '5',
    image: require('../../assets/img/manufacture/manu5.png'),
  },
  {
    id: '6',
    image: require('../../assets/img/manufacture/manu6.png'),
  },
  {
    id: '7',
    image: require('../../assets/img/manufacture/manu7.png'),
  },
  {
    id: '8',
    image: require('../../assets/img/manufacture/manu8.png'),
  },
  {
    id: '9',
    image: require('../../assets/img/manufacture/manu9.png'),
  },
  {
    id: '10',
    image: require('../../assets/img/manufacture/manu10.png'),
  },
  {
    id: '11',
    image: require('../../assets/img/manufacture/manu11.png'),
  },
];

const ManuItem = ({image, navigation, isLastManuItem }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { openFilterActionSheet: true })} 
      style={styles.mediList}
    >
      <View style={[styles.mediListImgArea, { borderBottomWidth: 0, height:80 }]}>
        <Image style={styles.mediListImg} source={image} />
      </View>
    </TouchableOpacity>
    {isLastManuItem && (
      <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { openFilterActionSheet: true })} style={styles.mediList}>
        <View style={styles.seeAllArea}>
          <FontAwesome name="arrow-circle-o-right" size={30} color="#198754" />
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </TouchableOpacity>
    )}
  </>
);

const CATDATA = [
  {
    id: '1',
    title: 'Nebuliser',
    image: require('../../assets/img/category/cat2.png'),
  },
  {
    id: '2',
    title: 'Inhaler',
    image: require('../../assets/img/category/cat4.png'),
  },
  {
    id: '3',
    title: 'Diagonostic & Monitoring',
    image: require('../../assets/img/category/cat1.png'),
  },
  {
    id: '4',
    title: 'Mother & Baby',
    image: require('../../assets/img/category/cat3.png'),
  },
  {
    id: '5',
    title: 'Injectables',
    image: require('../../assets/img/category/cat5.png'),
  },
  {
    id: '6',
    title: 'Medical Supplies',
    image: require('../../assets/img/category/cat6.png'),
  },
  {
    id: '7',
    title: 'Diabetes Care',
    image: require('../../assets/img/category/cat7.png'),
  },
];

const CatItem = ({ title, image, navigation, isLastCatItem }) => (
  <>
    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { openFilterActionSheet: true })} style={styles.mediList}>
      <View style={styles.catListImgArea}>
        <Image style={styles.mediListImg} source={image} />
      </View>
      <View style={styles.CatListCont}>
        <Text style={styles.catTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
      </View>
    </TouchableOpacity>
    {isLastCatItem && (
      <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { openFilterActionSheet: true })} style={styles.mediList}>
        <View style={styles.seeAllArea}>
          <FontAwesome name="arrow-circle-o-right" size={30} color="#198754" />
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </TouchableOpacity>
    )}
  </>
);

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function HomeScreen({ navigation }) {
  const shuffledData = shuffleArray(NEWDATA);
  const shuffledDisData = shuffleArray(DATA);
  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1,
      paddingHorizontal:15,
    }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require(`${IMG_PATH}/logo.png`)} />
        <TouchableOpacity onPress={() => navigation.navigate("ListViewScreen")}
          style={{ backgroundColor:'#fff', padding:5, borderRadius:100 }}
        >
          <MaterialIcons name="list" size={25} color="#198754" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate("SearchScreen")}
        style={styles.searchButton}
      >
        <FontAwesome name="search" size={20} color="#198754" />
        <Text style={styles.searchButtonText}>Search by brand, company name, or generic</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View style={styles.sliderContainer}>
          <Swiper style={styles.slider} autoplay>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.slideImage} />
            ))}
          </Swiper>
        </View>
        <View>
          <View 
             style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
             }}
          >
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                gap:5,
              }}
            >
              <Image source={require(`${IMG_PATH}/title_icon.png`)} />
              <Text style={styles.textHeadTitle}>
                Trending
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Shortcuts', { screen: 'ShortcutScreen', params: { initialTab: 'TRENDING' } })} >
              <Text style={styles.textSeeAll}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={DATA.map((item, index) => ({ ...item, isLastItem: index === DATA.length - 1 }))}
            renderItem={({ item }) => <Item {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        {/* <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item, index) => `${item.id}-${index}`} // Include index in the key to force a fresh render
          numColumns={2} // Set the initial number of columns
        /> */}
        <View style={{marginTop:10}}>
          <View 
             style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
             }}
          >
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                gap:5,
              }}
            >
              <Image source={require(`${IMG_PATH}/manufacture_logo.png`)} />
              <Text style={styles.textHeadTitle}>
                Manufactures
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { openFilterActionSheet: true })}>
              <Text style={styles.textSeeAll}>
                Descover all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={MANUDATA.map((manuitem, index) => ({ ...manuitem, isLastManuItem: index === MANUDATA.length - 1 }))}
            renderItem={({ item }) => <ManuItem {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <View style={{marginTop:10}}>
          <View 
             style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
             }}
          >
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                gap:5,
              }}
            >
              <Image source={require(`${IMG_PATH}/offer_icon.png`)} />
              <Text style={styles.textHeadTitle}>
                Good Discounts
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ListViewScreen")} >
              <Text style={styles.textSeeAll}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={shuffledDisData.map((item, index) => ({ ...item, isLastItem: index === shuffledDisData.length - 1 }))}
            renderItem={({ item }) => <Item {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <View style={{marginTop:10}}>
          <View 
             style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
             }}
          >
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                gap:5,
              }}
            >
              <Image source={require(`${IMG_PATH}/new_icon.png`)} />
              <Text style={styles.textHeadTitle}>
                New Products
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Shortcuts', { screen: 'ShortcutScreen', params: { initialTab: 'NEW' } })} >
              <Text style={styles.textSeeAll}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={shuffledData.map((item, index) => ({ ...item, isLastNewItem: index === shuffledData.length - 1 }))}
            renderItem={({ item }) => <NewItem {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <View style={{marginVertical:10}}>
          <View 
             style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
             }}
          >
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                gap:5,
              }}
            >
              <Image source={require(`${IMG_PATH}/cat_icon.png`)} />
              <Text style={styles.textHeadTitle}>
                Gategories
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { openFilterActionSheet: true })}>
              <Text style={styles.textSeeAll}>
                Descover all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={CATDATA.map((catitem, index) => ({ ...catitem, isLastCatItem: index === CATDATA.length - 1 }))}
            renderItem={({ item }) => <CatItem {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0fffc',
  },
  logo: {
    height: 30,
    width: 180,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#198754',
    borderRadius: 5,
    height: 55,
    marginBottom: 10,
  },
  searchButtonText: {
    color: "#198754",
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 10,
  },
  sliderContainer: {
    height: 140,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  slider: {
    height: '100%',
  },
  slideImage: {
    height: '90%',
    width: '100%',
    resizeMode: 'cover',
  },
  textHeadTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight:'700',
    lineHeight: 20,
  },
  textSeeAll: {
    color: '#8C8C8C',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight:'600',
    lineHeight: 20,
  },
  mediList: {
    marginHorizontal:3,
    marginVertical:8,
    paddingVertical: 8,
    width: 151,
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
    width:"100%",
    height:103,
    borderBottomWidth:1,
    borderBottomColor:'#eaeaea',
  },
  catListImgArea: {
    width:60,
    height:60,
    alignSelf:'center',
    paddingTop:8
  },
  mediListImg: {
    width:"100%",
    height:'100%',
    resizeMode:"contain",
  },
  mediListCont: {
    paddingHorizontal:8,
  },
  CatListCont: {
    alignSelf:'center',
  },
  mediTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    paddingTop:5,
    minHeight:37,
  },
  catTitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    paddingTop:5,
    minHeight:37,
    textAlign:'center'
  },
  pricesArea: {
    paddingVertical:6,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
  },
  prices: {
    flexDirection:'row',
    alignItems:'center',
    gap:5
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
    backgroundColor:'#f9dddb',
    borderRadius: 3,
    height:16,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:2,
  },
  offerPercent: {
    fontSize:9,
    color:'red',
    fontWeight:'500',
  },
  addToCartBtnArea: {
    borderRadius: 5,
    backgroundColor: '#198754',
    height:33,
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
  seeAllArea: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    gap:5,
  },
  seeAllText: {
    color: '#198754',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },

});

export default HomeScreen;
