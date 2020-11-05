import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

class BigTextHeader extends Component{
  render(){
    const {content,backgroundColor} = this.props;
      return(
        <View style={styles.container}>
          <Text style={styles.content}>{content}</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  content: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:40
  }
});

export default BigTextHeader;
