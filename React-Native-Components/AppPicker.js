import React, { useState } from 'react';
import {View, StyleSheet, Platform,TextInput,Modal,Button, FlatList} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

import AppText from '../components/AppText';
import { TouchableWithoutFeedback } from 'react-native';
import Screen from './Screen';
import PickerItem from '../components/PickerItem';


function AppPicker({icon,items,placeholder,onSelectItem,selectedItem }){
    const [modalVisible,setModalVisible]=useState(false);


    return(
        
         

        <React.Fragment>

            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

                <View style = {styles.container}>
                    {icon && 
                        <MaterialCommunityIcons 
                            style = {styles.icon} 
                            size = {20} 
                            color = {colors.medium} 
                            name={icon}/>}
                    <AppText style ={styles.text} >{selectedItem ? selectedItem.label:placeholder}</AppText>
                    <MaterialCommunityIcons 
                    
                        size = {20}
                        color = {colors.medium} 
                        name="chevron-down"/>
                </View>

            </TouchableWithoutFeedback>
            <Modal visible ={modalVisible} animationType = "slide" > 
            <Screen>
                <Button title="Close" onPress={()=>setModalVisible(false)}></Button>
                <FlatList 
                    data={items}
                    keyExtractor={(item)=>item.value.toString()}
                    renderItem={({item}) => 
                        <PickerItem
                            label={item.label}
                            onPress={()=>{
                                setModalVisible(false);
                                onSelectItem(item);
                            }}

                    
                        />}
                    />

            </Screen>
                        

            </Modal>

        </React.Fragment>



    


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

    text:{
        flex:1,

    },

    icon:{
        marginRight:10,

    },

    

})

export default AppPicker;