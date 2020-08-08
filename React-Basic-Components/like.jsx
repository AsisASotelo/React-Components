import React from 'react';

//Input: liked:boolean
//Output: whenever it is clicked it raises an onclick event+

const Like = (props) => {
    
    

        let classes = "fa fa-heart"
        if(!props.liked) classes +="-o"

        return(<i onClick={props.onClick} 
                    className = {classes} aria-hidden="true"
                    style={{cursor:"pointer"}}
                    
                    
                    
                    ></i>)

    
}


export default Like;