import React, {useState} from "react";
import {StyleSheet, Image, View, Text, TextInput, Platform, UIManager, LayoutAnimation} from "react-native";
import Splash from "./Splash/Spalsh";
import Categories from "./Categories/Categories";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function MainActivity(props) {
    const [ShowSplash, SetShowSplash] = useState(true);
    setTimeout(()=>{SetShowSplash(false)}, 2000);


    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    if(ShowSplash) {
        return ( <Splash /> );
    }

    return (
        <Categories/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0F0F0F',
    },
});