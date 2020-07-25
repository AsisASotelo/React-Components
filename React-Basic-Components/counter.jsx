import React, { Component } from 'react';


class counter extends Component {
    state = {
        value:this.props.value,
        
        
    };
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    

    renderTags(){
        if(this.state.tags.length === 0) return <p> There are no tags!</p>;

        return <ul>
        {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
    </ul>
    }

    style = {
        fontSize: 10,
        fontWeight:'bold',
    };

    handleIncrement=product=> {
        
        this.setState({value:this.state.value+1});
    }

    
    render() {

        
        return (
            <div>
               

                {/* <img src = {this.state.imageUrl} alt="A picture of something"/> */}
                <span className = {this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                    onClick = {this.handleIncrement}
                    className = "btn btn-secondary btn-sm">Increment</button> 

                <button onClick = {this.props.onDelete}className="btn btn-danger btn-sm m-2">Delete</button>


                {/* {this.renderTags()} */}
                

            </div>
            
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} =this.state;
        return value === 0 ? "Zero": value;
    }
}

export default counter;