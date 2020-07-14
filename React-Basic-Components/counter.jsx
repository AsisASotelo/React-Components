import React, { Component } from 'react';


class counter extends Component {
    state = {
        count:0,
        imageUrl: 'https://picsum.photos/200',
        tags:['tag1','tag2','tag3']
        
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
        console.log(product);
        this.setState({count:this.state.count+1});
    }

    
    render() {

        
        return (
            <>

                {/* <img src = {this.state.imageUrl} alt="A picture of something"/> */}
                <span className = {this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick = {()=> this.handleIncrement({id:1})}
                className = "btn btn-secondary btn-sm">Increment</button> 


                {this.renderTags()}
                

            </>
            
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} =this.state;
        return count === 0 ? "Zero": count;
    }
}

export default counter;