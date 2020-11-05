import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, Button } from 'react-native';

const window = Dimensions.get('window');

class GenericButton extends Component{
  render(){
    const {iconSource, content, func, backgroundColor} = this.props;
      return(
        <View style={{
          backgroundColor:backgroundColor,
          width: window.width-20,
          justifyContent: 'center',
          marginTop:40,
          marginLeft:10,
          marginRight:10,
          padding:10,
          alignItems: 'center',
          borderRadius:20,
          flexDirection: 'row'
        }}>
          <Image style={{
            width:40,
            height:40
          }} source={{uri: iconSource}}/>
          <Button
            onPress={func}
            title={content}
            style={styles.button}
            color="#000000"
          />
        </View>
      )

  }
}

const styles = StyleSheet.create({
  button:{
    width: window.width-20,
    fontSize:20,
    fontWeight:"500"
  }
});

export default GenericButton;
