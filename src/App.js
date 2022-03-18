import "./style.css"
import Cards from "./components/cards";
import Charts from "./components/charts";
import { useState } from "react";
import Slick from "./components/slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {


  const [dataCards, setDataCards] = useState(
    [{ title: "Chamados pendentes", num_chamados: "100" },
    { title: "Chamados em andamento", num_chamados: "100" },
    { title: "Chamados finalizados", num_chamados: "100" },
    { title: "Chamados Total", num_chamados: "300" },
    { title: "Chamados Total", num_chamados: "300" },
    { title: "Chamados Total", num_chamados: "300" }]
  )


  const [data, setData] = useState(

    [

      {

        data: [
          ["Year", "Sales", "Expenses"],
          ["2004", 1000, 400],
          ["2005", 1170, 460],
          ["2006", 660, 1120],
          ["2007", 1030, 540],
        ],
        chartType: "LineChart",
        type: 1

      },

      {
        data: [
          [
            "Element",
            "Density",
            { role: "style" },
            {
              sourceColumn: 0,
              role: "annotation",
              type: "string",
              calc: "stringify",
            },
          ],
          ["Copper", 8.94, "#b87333", null],
          ["Silver", 10.49, "silver", null],
          ["Gold", 19.3, "gold", null],
          ["Platinum", 21.45, "color: #e5e4e2", null],
        ],
        chartType: "BarChart",
        type: 2
      },
      {
        data: [
          [
            "Element",
            "Density",
            { role: "style" },
            {
              sourceColumn: 0,
              role: "annotation",
              type: "string",
              calc: "stringify",
            },
          ],
          ["Copper", 8.94, "#b87333", null],
          ["Silver", 10.49, "silver", null],
          ["Gold", 19.3, "gold", null],
          ["Platinum", 21.45, "color: #e5e4e2", null],
        ],
        chartType: "BarChart",
        type: 2
      },
      {

        data: [
          ["Pizza", "Popularity"],
          ["Pepperoni", 33],
          ["Hawaiian", 26],
          ["Mushroom", 22],
          ["Sausage", 10], // Below limit.
          ["Anchovies", 9], // Below limit.
        ],
        chartType: "PieChart",
        type: 1

      }

    ]

  )

  const [dutyData, setDutyData] = useState(
    [
      {
        name: 'Jackson Pontes Cavalcante Filho',
        date: 'Segunda-Feira (21/03/2022)'
      },
      {
        name: 'Juvenal Amarante de Souza Neto',
        date: 'Terça-Feira (22/03/2022)'
      },
      {
        name: 'Davi Fiusa',
        date: 'Quarta-Feira (23/03/2022)'
      },
      {
        name: 'Afonso Gabriel de Almeida Avanzi',
        date: 'Quinta-Feira (24/03/2022)'
      },
      {
        name: 'Francico Andrerson Freitas Cavalcante',
        date: 'Sexta-Feira (25/03/2022)'
      },
      {
        name: 'Gabriel Evaristo Mota',
        date: 'Sábado (26/03/2022)'
      },
      {
        name: 'Anderson dos Santos Reinaldo',
        date: 'Sábado (26/03/2022)'
      }

    ]
  )

  const [dataNextCharts, setDataNextCharts] = useState(
    [
      {
        data: [
          ["Year", "Sales", "Expenses"],
          ["2004", 1000, 400],
          ["2005", 1170, 460],
          ["2006", 660, 1120],
          ["2007", 1030, 540],
        ],
        chartType: "LineChart",
        type: 1
      },
      {
        data: [
          [
            "Employee Name",
            { type: "date", label: "Start Date (Long)" },
            { type: "date", label: "Start Date (Medium)" },
            { type: "date", label: "Start Date (Short)" },
          ],
          [
            "Mike",
            new Date(2008, 1, 28, 0, 31, 26),
            new Date(2008, 1, 28, 0, 31, 26),
            new Date(2008, 1, 28, 0, 31, 26),
          ],
          [
            "Bob",
            new Date(2007, 5, 1, 0),
            new Date(2007, 5, 1, 0),
            new Date(2007, 5, 1, 0),
          ],
          [
            "Alice",
            new Date(2006, 7, 16),
            new Date(2006, 7, 16),
            new Date(2006, 7, 16),
          ],
        ],
        chartType: "Table",
        type: 1
      },
      {
        data: [
          ["Year", "Sales", "Expenses"],
          ["2004", 1000, 400],
          ["2005", 1170, 460],
          ["2006", 660, 1120],
          ["2007", 1030, 540],
        ],
        chartType: "LineChart",
        type: 1

      },

    ]

  )

  return (
    <div className="App">
      <header className="App-header">

        <div className="titleDashboard">

          <h1> Gestão TI - Desenvolvimento 🚀 </h1>

        </div>


        <div class="row" style={{ margin: '1rem', marginTop: '5rem' }}>

          {
            dataCards ?
              dataCards.map((dados) => {
                return <Cards
                  title={dados.title}
                  num_chamados={dados.num_chamados}
                />
              })
              : null
          }

        </div>

        <div className="row" style={{ margin: '1rem' }} >

          {
            data ?

              data.map((dataChart) => {

                return <div className={`col-lg-${dataChart.type == 1 ? 4 : 2} mt-4`} >
                  <Charts
                    data={dataChart.data}
                    chartType={dataChart.chartType}
                  />

                </div>
              }) : null
          }

        </div>

        <div className="row" style={{ backgroundColor: 'white', margin: '2rem' }}>

          {dutyData ? <Slick data={dutyData} /> : null}

        </div>


        <div class="row" style={{ margin: '1rem' }}>

          {
            dataNextCharts ?
              dataNextCharts.map((dadosNextCharts) => {
                return <div className={`col-lg-${dadosNextCharts.type == 1 ? 4 : 2} mt-4`} >
                  <Charts
                    data={dadosNextCharts.data}
                    chartType={dadosNextCharts.chartType}
                  />
                </div>
              })
              : null
          }

        </div>




      </header>
    </div>
  );
}

export default App;
