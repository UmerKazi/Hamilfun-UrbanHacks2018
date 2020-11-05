import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import CategoryItem from './category-item.js';

const window = Dimensions.get('window');

class CategoryRow extends Component{
  render(){
    const {categoryNames, categoryImages, categoryFunctions} = this.props;
      return(
        <View style={styles.container}>
          <CategoryItem title={categoryNames[0]} imageSource={categoryImages[0]} func={categoryFunctions[0]}/>
          <CategoryItem title={categoryNames[1]} imageSource={categoryImages[1]} func={categoryFunctions[1]}/>
          <CategoryItem title={categoryNames[2]} imageSource={categoryImages[2]} func={categoryFunctions[2]}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  content: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:40
  }
});

export default CategoryRow;
