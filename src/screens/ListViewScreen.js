import React, { useRef, useState } from 'react';
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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Swiper from 'react-native-swiper';

import ActionSheet from 'react-native-actions-sheet';

const IMG_PATH = '../../assets/img';

const images = [
  require('../../assets/img/banner_img_3.jpg'),
  require('../../assets/img/banner_img_0.jpg'),
  require('../../assets/img/banner_img_1.jpg'),
];


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
            <></>
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

const sortingOptions = [
  "Name: A to Z", "Name: Z to A", "Discount: Low to High", "Discount: High to Low", 
  "Price: Low to High", "Price: High to Low", "Company: A to Z", "Company: Z to A", 
  "Generic: A to Z", "Generic: Z to A"
];
const availabilityOptions = ["Pre Order", "In Stock"];

const filterOptionsCompany = [
  "Edruc Ltd.", "Square Pharmaceuticals", "IBN Pharmacy Ltd.", "Beximco Pharma Ltd.", 
  "Opsonin Pharma", "Advancing Possibilites.'", "ACME.", "Renata Limited.", 
  "Drug International Limited.", "Eskayef Pharmaceuticals Ltd.", "Incepta Pharmaceuticals Ltd."
];

const filterOptionsCategory = [
  "Consumables", "Diabetes Care", "Diagostic and Monitoring", "Disposables", 
  "Equipment", "Equipment Electrical", "Food", "Food and Ingredients", 
  "Household Product", "Inhaler"
];

function ListViewScreen({ navigation }) {

  const actionSheetRef = useRef();
  const actionSheetFilterRef = useRef();
  const [selectedSort, setSelectedSort] = useState(null); // Initialize as null
  const [selectedAvailability, setSelectedAvailability] = useState(null); // Initialize as null

  const [isSelected, setSelection] = useState(true);

  const handleOpenFilterActionSheet = () => {
    actionSheetFilterRef.current?.setModalVisible(true);
  };

  const handleFilterApply = (index) => {
    setSelectedSort(index);
    actionSheetFilterRef.current?.setModalVisible(false);
  };

  const handleFilterReset = (index) => {
    setSelectedSort(index);
    setSelectedAvailability(index);
  };

  const handleOpenActionSheet = () => {
    actionSheetRef.current?.setModalVisible(true);
  };

  // Update selected sort state
  const handleSortSelection = (index) => {
    setSelectedSort(index);
  };

  const handleShortApply = (index) => {
    setSelectedSort(index);
    actionSheetRef.current?.setModalVisible(false);
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#f0fffc',
      flex:1,
      paddingHorizontal:15,
    }}>
      <StatusBar backgroundColor="#f0fffc" barStyle="dark-content" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require(`${IMG_PATH}/logo.png`)} />
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}
          style={{ backgroundColor:'#fff', padding:5, borderRadius:100 }}
        >
          <MaterialIcons name="grid-view" size={25} color="#198754" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate("SearchScreen")}
        style={styles.searchButton}
      >
        <FontAwesome name="search" size={20} color="#198754" />
        <Text style={styles.searchButtonText}>Search by brand, company name, or generic</Text>
      </TouchableOpacity>
      <View style={styles.scrollView}>
        <View style={styles.sliderContainer}>
          <Swiper style={styles.slider} autoplay>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.slideImage} />
            ))}
          </Swiper>
        </View>
        <View style={{paddingBottom:400}}>
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
              <Text style={styles.textHeadTitle}>
              </Text>
            </View>
            <View style={{ flexDirection:'row', gap:10 }}>
              <TouchableOpacity style={{ padding:4, }} onPress={handleOpenFilterActionSheet}>
                <FontAwesome name="filter" size={18} color="#8a8a8a" />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding:4, }} onPress={handleOpenActionSheet}>
                <FontAwesome name="sort-amount-desc" size={16} color="#8a8a8a" />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            //horizontal={true}
          />
        </View>
      </View>

      <ActionSheet ref={actionSheetRef}>
        <View style={{ padding: 20, paddingTop:0 }}>
          <Text style={styles.actionSheetTitle}>Sort By</Text>
          {sortingOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.actionSheetItem} onPress={() => handleSortSelection(index)} >
              <Text style={{ color: selectedSort === index ? "#198754" : "#000" }}>{option}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.actionSheetTitle}>Availability</Text>
          {availabilityOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.actionSheetItem} onPress={() => setSelectedAvailability(index)}>
              <Text style={{ color: selectedAvailability === index ? "#198754" : "#000" }}>{option}</Text>
            </TouchableOpacity>
          ))}
          <View style={{ flexDirection:"row", justifyContent:"space-between", marginTop:20 }}>
            <TouchableOpacity 
              style={{ width:"48%", backgroundColor:"#fff", borderWidth:1, borderColor:"red", borderRadius:4, paddingVertical:13, }} 
              onPress={handleFilterReset}>
              <Text style={{color:"red" , fontWeight:600, textTransform:"uppercase", fontSize:14, textAlign:"center" }}>
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{width:"48%", backgroundColor:"#198754", borderRadius:4, paddingVertical:13, }} 
              onPress={handleShortApply}>
              <Text style={{color:"#fff" , fontWeight:600, textTransform:"uppercase", fontSize:14, textAlign:"center" }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>

      <ActionSheet ref={actionSheetFilterRef}>
        <Text style={[styles.actionSheetTitle, {textAlign:"center" }]}>Filter By</Text>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection:"row", justifyContent:"space-between", marginBottom:10 }}>
            <TouchableOpacity onPress={() => setSelection(true)}  style={{ borderWidth:1, borderRadius:5, borderColor: isSelected ? "#198754" : "#8a8a8a", width:"48%" }} >
              <Text style={[styles.actionSheetTitle, {color: isSelected ? "#198754" : "#8a8a8a", fontSize:14, textAlign:"center"}]}>Company</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelection(false)}  style={{ borderWidth:1, borderRadius:5, borderColor: !isSelected ? "#198754" : "#8a8a8a", width:"48%" }}>
              <Text style={[styles.actionSheetTitle, {color: !isSelected ? "#198754" : "#8a8a8a", fontSize:14, textAlign:"center"}]}>Category</Text>
            </TouchableOpacity>
          </View>
          {isSelected ? (
          <>
            {filterOptionsCompany.map((option, index) => (
              <TouchableOpacity key={index} style={styles.actionSheetItemFilter} onPress={() => handleSortSelection(index)} >
                <Text style={{ color: selectedSort === index ? "#198754" : "#000" }}>{option}</Text>
                <MaterialIcons 
                  name={selectedSort === index ? "check-box" : "check-box-outline-blank"} 
                  size={20} 
                  color={selectedSort === index ? "#198754" : "#8a8a8a"} 
                />
              </TouchableOpacity>
            ))}
          </>
          ) : (
          <>
            {filterOptionsCategory.map((option, index) => (
              <TouchableOpacity key={index} style={styles.actionSheetItemFilter} onPress={() => handleSortSelection(index)} >
                <Text style={{ color: selectedSort === index ? "#198754" : "#000" }}>{option}</Text>
                <MaterialIcons 
                  name={selectedSort === index ? "check-box" : "check-box-outline-blank"} 
                  size={20} 
                  color={selectedSort === index ? "#198754" : "#8a8a8a"} 
                />
              </TouchableOpacity>
            ))}
          </>
          )}
          <View style={{ flexDirection:"row", justifyContent:"space-between", marginTop:20 }}>
            <TouchableOpacity 
              style={{ width:"48%", backgroundColor:"#fff", borderWidth:1, borderColor:"red", borderRadius:4, paddingVertical:13, }} 
              onPress={handleFilterReset}>
              <Text style={{color:"red" , fontWeight:600, textTransform:"uppercase", fontSize:14, textAlign:"center" }}>
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{width:"48%", backgroundColor:"#198754", borderRadius:4, paddingVertical:13, }} 
              onPress={handleFilterApply}>
              <Text style={{color:"#fff" , fontWeight:600, textTransform:"uppercase", fontSize:14, textAlign:"center" }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
      
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
    height: 110,
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
  actionSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  actionSheetItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  actionSheetItemFilter: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection:"row",
    justifyContent:"space-between"
  },

});

export default ListViewScreen;
