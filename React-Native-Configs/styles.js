import {Platform} from 'react-native';

import colors from '../config/colors'

export default {
    text:{
        color:colors.black,
        fontSize:18,
        fontFamily:Platform.OS == "android" ? "Roboto": "Avenir",
    
    }
}

