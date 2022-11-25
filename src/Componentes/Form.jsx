
import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: "",
            img: "#"
        }

    }
    
    /*
    async componentDidMount(){
      await this.fetchApi();
    }*/
    
    
    fetchApi = async () => {
      //  let resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await resp.json();
     
        console.log(data);
        
        this.setState({
          img: data.sprites.front_default
        })
        //this.setImg(data.sprites.front_default)
    }

    /*
    setImg = url => {

      this.setState({
        img: url
      })
    }*/
    

    handlerName = event => {
      //console.log(event.target.value);
       this.setState({
        name: event.target.value
       })
    }

    handlerSubmit = event => {
       let aux = this.state.name
        console.log(aux);
        event.preventDefault();
        this.fetchApi();
    }


  render() {
   // console.log(this.state.name)
    return (
      <div>
        <div className="card">
          <div className="card-header text-black">
            Busca tu pokemon
          </div>
          <div className="card-body">
                <form onSubmit={this.handlerSubmit}>
                    <input
                      type="text"
                      placeholder="Ingrese el nombre de su pokemon"
                      value={this.state.name}
                      onChange={this.handlerName}
                    ></input>
                    <br/>
                    <button type='submit' className="btn btn-primary mt-2">Enviar</button>
                </form>
           
          </div>
         
        </div>
        
        <img src={this.state.img}></img>
      </div>
    )
  }
}

