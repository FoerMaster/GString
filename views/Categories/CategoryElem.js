import React, {useState} from "react";
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default function CategoryElem(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.box,{backgroundColor: props.color}]}>

            <Image style={styles.image} source={props.image}></Image>
            <LinearGradient colors={["rgba(30,30,30,0)", props.color, props.color]} useAngle={true} angle={90} style={styles.cover} />
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.desc}>Песен: {props.songs}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1e1e1e',
        borderRadius: 15,
        padding:20,
        paddingLeft: "40%",
        marginBottom: 10,
        overflow: "hidden",
        borderWidth:1,
        borderColor: "rgba(255,255,255,0.04)"
    },
    title:{
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    desc:{
        color: "white",
    },
    image: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 150,
        height: 150,
    },
    cover: {
        position: "absolute",
        left: "20%",
        top: 0,
        width: 200,
        height: 200,
    }
});