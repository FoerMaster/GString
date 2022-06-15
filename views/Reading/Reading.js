import React, {useState} from "react";
import {StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity} from "react-native";

export default function Reading(props) {

    return (
        <View style={styles.container}>

            <ScrollView style={{padding:10}}>

                <TouchableOpacity onPress={props.onPressBack} style={styles.backBtnB}>
                    <Text style={styles.backBtn}>Назад</Text>
                </TouchableOpacity>

                <Text style={styles.Title}>{props.text.Name}</Text>

                {Object.keys(props.text.Text).map((key) => {
                    if(props.text.Text[key].startsWith("chords")) {
                        return (
                            <Text style={styles.textChord}>{props.text.Text[key].replace("chords ","").replace(" "," ")}</Text>
                        )
                    } else {
                        return (
                            <Text style={styles.textMain}>{props.text.Text[key].replace("chords ","").replace(" "," ")}</Text>
                        )
                    }

                })}

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0F0F0F',
        paddingHorizontal: 15
    },
    textMain: {
        color: "white",
        fontSize: 20
    },
    textChord: {
        color: "#F43A7D",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1
    },
    Title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
        marginVertical: 50,
        textAlign: "center"
    }
});