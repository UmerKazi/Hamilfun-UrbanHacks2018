import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native';
import * as algoliasearch from "algoliasearch";
import ListElement from './list-element.js';

const window = Dimensions.get('window');

class ListPage extends Component {

    constructor(props) {
        super(props);

        //Initialize the Algolia API
        const client = algoliasearch('1I8UI3G7W5', '405fdf57715e80b2e988276307c77e61');
        const index = client.initIndex('test_RECREATION');

        //Configure the index
        index.setSettings({
            searchableAttributes: [
                'type',
                'name',
            ]
        });

        this.state = {
            client: client,
            index: index,
            results: []
        }

    }

    search = query => {
        this.state.index.search({query: query}, function(err, content){
            if (err) throw err;

            let hits = content.hits;
            this.setState(({results}) => ({
                results: hits
            }));
        });
    };

    render() {
        //Todo get props


        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props}
                    renderItem={({item}) =>
                        <ListElement
                            type={}
                            name={}
                            distance={}
                        />
                    }
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
    width: window.width,
    height: window.height,
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center'
}
});

export default ListPage;
