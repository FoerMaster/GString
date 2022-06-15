import React, {useState} from "react";
import {StyleSheet, Image, View, Text, TextInput, ScrollView, TouchableOpacity} from "react-native";
import SongsElem from "./SongsElem";
import Reading from "../Reading/Reading";

export default function Songs(props) {

    const [CurrentPlayning,SetPlayning] = useState(false)

    function OpenSong(category) {
        SetPlayning(category)
    }

    if(CurrentPlayning){
        return ( <Reading text={CurrentPlayning} onPressBack={()=>{SetPlayning(false)}} /> );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.onPressBack} style={styles.backBtnB}>
                    <Text style={styles.backBtn}>Назад</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Начните поиск..."
                    placeholderTextColor={"#363636"}
                    style={styles.input}
                    selectionColor={'#F43A7D'}
                />
            </View>

            <ScrollView style={{padding:10}}>
                {Object.keys(props.songs).reverse().map((key) => {
                    console.log(props.songs[key]);
                    return (
                        <SongsElem onPress={()=>{OpenSong(props.songs[key])}} name={props.songs[key].Name} count={props.songs[key].PlayCount} diff={props.songs[key].Dif} />
                    )
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
    },
    header: {
        width: "100%",
        height: 60,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: "#1E1E1E",
        borderBottomColor: "#383838",
        borderBottomWidth: 1,
    },
    backBtnB: {
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        marginRight: 15
    },
    backBtn: {
      color: "gray"
    },
    input: {
        flex:1,
        margin: 0,
        backgroundColor: "#0F0F0F",
        borderWidth: 1,
        borderColor: "#323232",
        borderRadius: 6,
        color: "white",
        padding: 8,
    }
});