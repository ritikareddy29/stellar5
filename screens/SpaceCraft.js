import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";

export default class SpaceCraftScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getData=()=> {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(response=> {
            this.setState({ aircrafts: response.data.results})
            console.log(response.data.results)
        })
        .catch(error => {
            console.long(error.message)
        })
    }

    renderItem = ({item})=> {
        return(
            <View style={{borderWidth: 1, justifyContent: "center", alignItems: 'center', marginBottom: 10, elevation: 10}}>
                <Image souce={{uri: item.agency.image_url}} style={{width: "100%", height: 200, marginTop: 15, marginBottom: 15, marginRight:10}}>
                </Image>
                <Text style={{fontWeight: "bold", fontSize: 20}}> (item.name) </Text>
                <Text style={{color: '#696969'}}> (item.agency.name) </Text>
                <Text>DESCRIPTION</Text>
                <Text style={{color: '#A9A9A9', marginLeft: 10, marginRight: 10}}>(item.agency.description)</Text>
            </View>
        )
    }
     
    render() {
        return(
            <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
                <View styles={{flex:0.25}}>
                    <Text>Space Crafts </Text>
                </View>
                <View styles={{flex:0.75}}>
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.aircrafts}
                    renterItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})