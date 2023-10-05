import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";
import {WebView} from 'react-native-webview'

export default class DailyPicScreen extends Component {
    render() {
        
        const {longitude, latitude} = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true$projection=stereo&showdate=false&showposition-false'

        return(
            <View style={styles.screen}>
                <WebView
                scalesPageToFit={true}
                source={{uri: path}}
                style={{marginTop: 20, marginBotton: 20}}/>
                <Text> StarMap Screen</Text>
                <TextInput
                style={{height:40, borderColor: 'grey', borderWidth: 1}}
                placeholder="Enter your latitude"
                placeholderTextColor = '#ffff#000000'
                onChangeText={(text) =>{
                    this.setState({
                        latitude: text
                    })
                }}
                />
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