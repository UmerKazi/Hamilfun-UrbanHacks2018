import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, Button, Text} from 'react-native';
import GenericImage from '../components/generic-image.js';

const window = Dimensions.get('window');

class Header extends Component{
  render(){
      return(
        <View style={styles.container}>
          <Text>finish the header slave</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    width: window.width,
    justifyContent: 'center',
    padding:10,
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  }
});

export default Header;
