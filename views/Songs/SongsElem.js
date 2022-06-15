import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function SongsElem(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.box,{backgroundColor: props.color}]}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.desc}>Сыграно: {props.count} раз(а)</Text>
            <Text style={[styles.desc,{textAlign:"right"},styles.diff]}>{props.diff}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1e1e1e',
        borderRadius: 15,
        padding:13,
        marginBottom: 10,
        overflow: "hidden",
        borderWidth:1,
        borderColor: "rgba(255,255,255,0.13)"
    },
    diff: {
        position: "absolute",
        right: 15,
        top: 10
    },
    title:{
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    desc:{
        color: "#6c6c6c",
    },
});