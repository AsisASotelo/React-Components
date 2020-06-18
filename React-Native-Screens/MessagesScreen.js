import React from 'react';
import {FlatList, SafeAreaView,Platform,StatusBar, StyleSheet,View} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';


// In Lieu of a backend we create alist

const message = [
    {
        id:1,
        title:'T1',
        description:'D1',
        image: require("../assets/mosh.jpg")
    },

    {
        id:2,
        title:'T2',
        description:'D2',
        image: require("../assets/mosh.jpg")
    }
]




function MessagesScreen(props){
    return( 

        <Screen>

            <FlatList
                data = {message}
                keyExtractor = { message =>message.id.toString()} //Must return a string
                renderItem = {({item}) => (
                
                    <ListItem
                    
                    title={item.title}
                    subTitle={item.description}
                    onPress={() => console.log("Message Selected", item)}
                    image = {item.image}/>
                    
                    
                    )}

                    ItemSeparatorComponent={ListItemSeperator}
                    
                    
                    
                    />
                

        </Screen>
    


    )
}





export default MessagesScreen;