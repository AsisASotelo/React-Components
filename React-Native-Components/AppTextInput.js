import React from 'react';
import {View, StyleSheet, Platform,TextInput} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function AppTextInput({icon,...otherProps}){
    return(

        <View style = {styles.container}>
            {icon && <MaterialCommunityIcons style = {styles.icon} size = {20} color = {colors.medium} name={icon}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>

        


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:10,
        marginVertical:10,
    },

    icon:{
        marginRight:10,

    },

    textInput:{
        fontSize:18,
        fontFamily:Platform.OS == "android" ? "Roboto": "Avenir",

    }

})

export default AppTextInput;
