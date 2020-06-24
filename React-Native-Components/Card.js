import React from 'react';
import {View, StyleSheet,Image} from 'react-native';



import colors from '../config/colors';
import AppText from './AppText';

function Card({title,subTitle,image}){

    return(
        <View style = {styles.card}>
            <Image style ={styles.image} source = {image}/>

        <View style={styles.detailsContainer}>

            <AppText style = {styles.title}>{title}</AppText>
            <AppText>{subTitle}</AppText>


        </View>
        </View>
    )
}


const styles = StyleSheet.create({

    card:{
        borderRadius:15,
        backgroundColor:'#fff',
        marginBottom:20,
        overflow:"hidden",
    },
    image:{
        width:'100%',
        height:200,

    },

    detailsContainer:{
        padding:20,

    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold",
    },

    title:{
        marginBottom:7,
        
    }

})

export default Card;