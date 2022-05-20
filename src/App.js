import React, { Component } from "react";
import api from "./api";

class App extends Component{

  state = {
    personagens: [],  
    desc: "",
  }

  async componentDidMount(){
    console.log("Entro no Di");
    
    var url_string = window.location.href;
    var url = new URL(url_string);
    var offSet = url.searchParams.get("Id");
    if (!offSet)
      offSet = "0";

    console.log("*****offSet*****");
    console.log(offSet);

    const response = await api.get('/characters', {
      params: {
        ts: "1",
        apikey: "2ade7401895df31af9054588520d7180",
        hash: "07bbfbe7624af28953e9b15e850d31e7",
        offset: offSet,
        limit: '1',
      }
   });
   if (offSet < 1562)
     this.setState({personagens: response.data});   
   else{
     window.alert("Acabou, Luíza. Vai estudar agora!");
     window.location.href = "https://capitaluizamarvel.netlify.app/?Id=1561";
   }
  }

  async previousPage(){
    console.log("Entro no previousPage");    
    
    var url_string = window.location.href;
    var url = new URL(url_string);
    var offSet = url.searchParams.get("Id");
    if (!offSet || offSet < 1){      
      window.alert("Opção Inválida, Luíza, presta atenção!")
    }
    else
    {
      offSet--;
      console.log("*****offSet*****");
      console.log(offSet);  
      window.location.href = "https://capitaluizamarvel.netlify.app/?Id=" + offSet;
    }
  }

  async nextPage(){
    console.log("Entro no nextPage");    
    
    var url_string = window.location.href;
    var url = new URL(url_string);
    var offSet = url.searchParams.get("Id");
    if (!offSet)
    {
      offSet = "1";
      url_string = url_string + "?Id="
    }
    else
      offSet++;

    url_string.replace("?Id=", "");

    console.log("*****offSet*****");
    console.log(offSet);
  
    window.location.href = "https://capitaluizamarvel.netlify.app" + offSet;
  }

  render(){

    const { personagens } = this.state;
    const { desc } = this.state;
    
    console.log("vou checar");    
   
    if (personagens.length < 1)
      return (
        <div>Aguardando...</div>
      )

    console.log("fim checar");        

    return(      
      <div>
        <div align="center">
          <h1>Personagens da Marvel</h1>
        </div>        
        {console.log("Teste3: ")}
        {console.log(personagens.data.results)}
        {console.log("Fim Teste3: ")}         

        <div class="centerWithBorder">
          {personagens.data.results.map(personagem => (                                                
            <div align="center">
              <h2>
                <strong>Personagem: </strong>{personagem.name}              
              </h2>   
              <p>
                <img src={personagem.thumbnail.path + "/portrait_xlarge." + personagem.thumbnail.extension}></img>
              </p>         
              <p>
                <b>Description:</b> {desc}
              </p>
            </div>                          
          ))}
        </div> 
        <p>
          <div align="center">
            <button key='Previous' onClick={() => this.previousPage()}>Anterior</button> | <button key='Next' onClick={() => this.nextPage()}>Próximo</button>  
          </div>
        </p>
      </div>
    )
  }
}

export default App;
