import React from "react";
import Pokeapi2 from "./Pokeapi2";

class Pokeapi extends React.Component{

constructor(props){
    super(props);

    this.state= {
        name:'Champion',

    }

}

    render(){
        return <div>
            <h1> {this.props.name}</h1>
        <Pokeapi2 name= {this.state.name} />
        </div>
        
    }
}
export default Pokeapi;