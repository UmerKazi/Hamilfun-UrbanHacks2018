import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, Button } from 'react-native';
import GenericImage from '../components/generic-image.js';

const window = Dimensions.get('window');

class LoadingPage extends Component{
  render(){
      return(
        <View style={styles.container}>
          <GenericImage imageWidth="60" imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/480px-Google_Chrome_icon_%28September_2014%29.svg.png"/>
          <GenericImage imageWidth="60" imageSource="https://intelligencedespatrimoines.fr/ipat2/wp-content/plugins/gallery-by-supsystic/src/GridGallery/Galleries/assets/img/loading.gif"/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    width: window.width,
    height: window.height,
    justifyContent: 'center',
    padding:10,
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  }
});

export default LoadingPage;
