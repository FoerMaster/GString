import React from "react";
import {StyleSheet, Image, View} from "react-native";


export default function Splash(props) {
    return (
        <View style={styles.container}>
            <Image style={{tintColor: "#fff"}} source={require('../../assets/logo.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0F0F0F',
        justifyContent: 'center',
        alignItems: 'center',
    }
});