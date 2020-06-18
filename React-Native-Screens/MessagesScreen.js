import React ,{useState} from 'react';
import {FlatList, SafeAreaView,Platform,StatusBar, StyleSheet,View} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


// In Lieu of a backend we create alist

const initialMessages = [
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

    const [messages,setMessages] = useState(initialMessages); // This returns an array -> Destructure immediately
    //    The first element in array is our state variable
    // The second element in the array is a function to udpate our state variable setStatae

  

    const handleDelete = message => {
        // Delete the message from messages 

        
        setMessages(messages.filter(m=>m.id!==message.id))

        
        

    }

    return( 

        <Screen>

            <FlatList
                data = {messages}
                keyExtractor = { messages =>messages.id.toString()} //Must return a string
                renderItem = {({item}) => (
                
                    <ListItem
                    
                    title={item.title}
                    subTitle={item.description}
                    onPress={() => console.log("Message Selected", item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={()=> handleDelete(item)}/>}
                    image = {item.image}/>
                    
                    
                    )}

                    ItemSeparatorComponent={ListItemSeperator}
                    
                    
                    
                    />
                

        </Screen>
    


    )
}





export default MessagesScreen;