import React, {useState} from "react";
import {StyleSheet, Image, View, Text, TextInput, ScrollView} from "react-native";
import CategoryElem from "./CategoryElem";

import VCoy from "../../Chords/VictorCoy/author";
import VCoy_Songs from "../../Chords/VictorCoy/songs";
import Songs from "../Songs/Songs";

export default function Categories(props) {

    const [CurrentCategory,SetCategory] = useState(false)

    function OpenCategory(category) {
        SetCategory(category)
    }


    if(CurrentCategory){
        return ( <Songs songs={CurrentCategory} onPressBack={()=>{SetCategory(false)}} /> );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    placeholder="Начните поиск..."
                    placeholderTextColor={"#363636"}
                    style={styles.input}
                    selectionColor={'#F43A7D'}
                />
            </View>

            <ScrollView style={{padding:10}}>
                <CategoryElem onPress={()=>{OpenCategory(VCoy_Songs)}} name={VCoy.Name} songs={VCoy_Songs.length} color={VCoy.Color} image={VCoy.Image}/>
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
        backgroundColor: "#1E1E1E",
        borderBottomColor: "#383838",
        borderBottomWidth: 1,
    },
    input: {
        width: "100%",
        height: "100%",
        margin: 0,
        backgroundColor: "#0F0F0F",
        borderWidth: 1,
        borderColor: "#323232",
        borderRadius: 6,
        color: "white",
        padding: 8,
    }
});