import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

class GenericImage extends Component{
  render(){
    const {imageSource, imageWidth} = this.props;

      return(
        <View style={styles.container}>
          <Image style={{
            width:imageWidth/100*window.width,
            height:imageWidth/100*window.width,
            marginLeft:(window.width-(imageWidth/100*window.width))/2,
            marginRight:(window.width-(imageWidth/100*window.width))/2
          }} source={{uri: imageSource}}/>
        </View>
      )

  }
}

const styles = StyleSheet.create({
  container: {
    width: window.width,
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default GenericImage;
