import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';

const window = Dimensions.get('window');

class CategoryRow extends Component{
  render(){
    const {title, imageSource, func} = this.props;
      return(
        <TouchableOpacity style={styles.container} onPress={func}>
          <Image style={styles.image} source={{uri: imageSource}}/>
          <Text style={styles.content}>{title}</Text>
        </TouchableOpacity>
      )

  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: window.width/3
  },
  content: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:15
  },
  image: {
    width:window.width/3-40,
    height:window.width/3-40,
    borderRadius:(window.width/3-40)/2,
    padding:20
  }
});

export default CategoryRow;
