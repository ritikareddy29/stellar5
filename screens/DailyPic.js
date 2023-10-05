import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ImageBackground} from "react-native";
import axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    getAPOD = () => {
        axios 
        .get("https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw")
        .then(response => {
            this.setState({apod: response.data})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                source={require('../assets/daily_pictures.png')} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy picture of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer}
                    onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                    >
                        <View style={styles.iconContainer}>
                            <Image source={require("../assets/play-video.png")} style={{width:50, height:50}}></Image>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        )
     }
}

const style= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    iconContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    listContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    explanationText: {
        fontSize: 15,
        color: "white"
    }
})