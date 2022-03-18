import "./home.css"
import Cards from "./components/cards";
import Charts from "./components/charts/index.js";
import { useState } from "react";


function App() {

  const[data,setData] = useState([["Age", "Weight"], [4, 5.5], [8, 12]])
  const[chartType,setChartType] = useState("ScatterChart")
  const[dataCards,setDataCards] = useState([{title:"Chamados pendentes", num_chamados:"100" },{title:"Chamados em andamento", num_chamados:"100"},{title:"Chamados finalizados", num_chamados:"100"},{title:"Chamados Total", num_chamados:"300"}])

  return (
    <div className="App">
      <header className="App-header">
        <div className="titleDashboard">

          <h5> Gestão TI - Desenvolvimento 👨‍💻🚀 </h5>

        </div>

        <div class="container">
          <div class="row">

          { 
            dataCards ?
            
            dataCards.map( (dados) =>{

              return <Cards
              title={dados.title}
              num_chamados={dados.num_chamados}
              /> 
            }): null
          }
              <div className="col-lg-6">
            
                <Charts
                data={data && data}
                chartType={chartType && chartType}
                />

              </div>

            </div>
          </div>
       
      </header>
    </div>
  );
}

export default App;
