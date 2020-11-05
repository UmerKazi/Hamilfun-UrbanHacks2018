import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import LoadingPage from './pages/loading-page.js';
import BigTextHeader from './components/big-text-header.js';
import Header from './components/header.js';
import GenericButton from './components/generic-button.js';
import CategoryItem from './components/category-item.js';
import renderIf from 'render-if';
import firebase from '@firebase/app'
import '@firebase/auth'
import { PermissionsAndroid } from 'react-native';

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Location Permission',
                'message': 'We need your location.'
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use location")
        } else {
            console.log("location permission denied")
        }
    } catch (err) {
        console.warn(err)
    }
}

requestLocationPermission();

var config = {
    apiKey:"AIzaSyBwro__LSLs4n1PsSu91EYKDjMZdcLkPY8",
    databaseURL: "https://hamilfun-63ac2.firebaseio.com",
    projectId: "hamilfun-63ac2",
};
//maps api key : AIzaSyALHXXP3dCiXonCzhlfIwhILPbpFAmfQE4
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const categoryNames = ["Parks","Ice Rinks","Beaches", "Bike Roads", "Pools", "Libraries"];
const categoryImages = ["https://previews.123rf.com/images/felker/felker1604/felker160400041/55940797-beautiful-landscape-with-road-through-pine-forest-square-vintage-toned-image-instagram-effect.jpg",
                      "http://img.groundspeak.com/waymarking/display/7874744b-148b-456e-9a10-b6fcf7d8a011.jpg",
                      "https://static1.squarespace.com/static/5266049fe4b08e763cc00c4b/t/5671e4d65a566877a0510dee/1450304746169/",
                      "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,f_auto,w_620/v1406759211/nnktqisslogn1cqtlhyt.jpg",
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlt7rjZlRr7iI5N-dQPZfz6NdJrb38d1102RMxWLFPJtHM_Yau",
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ovfkcROuEha7eMYGBqzODmhvV8QLA13YFTsZZ3iowM-XeBKiWQ"];
const window = Dimensions.get('window');
export default class App extends Component<Props> {
  state = {
    page_id: 3,
    email: "sample@idk.com",
    password: "pAssWOrD",
    categories: [],
    categoryFunctions:[()=>{this.pickList(0)},
                            ()=>{this.pickList(1)},
                            ()=>{this.pickList(2)},
                            ()=>{this.pickList(3)},
                            ()=>{this.pickList(4)},
                            ()=>{this.pickList(5)}],
    coords:{}
  }

  login(){
      firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.setState({page_id:3}))
        .catch(error => alert(error));
        this.setState({page_id:3});
  }

  pickList(list_id){
    //do something with the list_id
  }

  componentWillMount(){
    //do shit before the user catches u lacking
    this.generateCategoryJSX()
    this.fetchLocation()
  }

  generateCategoryJSX(){
    var prev = []
    for(var x=0;x<6;x++){
      prev = this.state.categories
      prev.push(
      <TouchableOpacity style={styles.categoryContainer} onPress={this.state.categoryFunctions[x]}>
        <Image style={styles.categoryImage} source={{uri: categoryImages[x]}}/>
        <Text style={styles.categoryText}>{categoryNames[x]}</Text>
      </TouchableOpacity>
      )
      this.setState({categories:prev})
    }
  }

  fetchLocation(){
    navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition(
      (data)=>{this.setState({coords:data.coords})},
      (error)=>{/**do some error handling here if you want Misha**/},
      {enableHighAccuracy:1,
      timeout:5000})
  }

  render() {
    return (
      <View style={styles.container}>
          {renderIf(this.state.page_id===0)(() => (
            <View>
              <LoadingPage/>
              //we  need to change the page_id state once data is gotten
            </View>
          ))}
          {renderIf(this.state.page_id===1)(() => (
            <View>
            <BigTextHeader content="Login"/>
            <GenericButton backgroundColor="#ffffff" iconSource="https://docs.snapchat.com/static/ghostlogo@2x-7619bf5537237fa6abac3ddcfc1d379b-038d0.png" content="Login with Snapchat" func={()=>alert("e")}/>
            <GenericButton backgroundColor="#ffffff" iconSource="https://accessbydesign.uk/abd/wp-content/themes/design14/images/timthumb/timthumb.php?src=https://accessbydesign.uk/abd/wp-content/gallery/google-20-things/googleg_standard_color_bg_512in800dp.jpg&w=300&h=" content="Login with Google" func={()=>alert("a")}/>
            <GenericButton backgroundColor="#ffffff" iconSource="http://cdn.onlinewebfonts.com/svg/img_339031.png" content="Login with email" func={()=>this.setState({page_id: 2})}/>
            </View>
          ))}
          {renderIf(this.state.page_id===2)(() => (
            <View>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
            <Button onPress={()=>this.login()} title="Login"/>
            </View>
          ))}
          {renderIf(this.state.page_id===3)(() => (
            <View style={{width:window.width}}>
              <Header/>
              <BigTextHeader content="Looking for : "/>
              <View style={styles.row}>
                {this.state.categories.slice(0,3)}
              </View>
              <View style={styles.row}>
                {this.state.categories.slice(3,6)}
              </View>
            </View>
          ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:window.width,
    fontFamily: "Roboto",
    flex: 1,
    paddingTop:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row:{
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  categoryContainer:{
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: window.width/3
  },
  categoryImage:{
    width:window.width/3-40,
    height:window.width/3-40,
    borderRadius:(window.width/3-40)/2,
    padding:20
  },
  categoryText:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:15
  }
});
