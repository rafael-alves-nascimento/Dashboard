import "../grafico_euro/euro_style.css";
import LineChart from "../../Tipo_graficos/LineChart";
import React,{useState } from 'react'
import api_euro from '../../../../Apis/Euro'


function Euro() {

  const [euro1,setEuro] = useState ([])
  
  api_euro.get('7').then( ({data}) => {
    setEuro(data)
    // console.log(data)
  })
  
  const userData = ({ labels: euro1.slice(0).map(z => new Date(z.timestamp*1000).toLocaleDateString("pt-BR")),
    datasets: [{
      label: "Valor do Euro comparado ao real",
      data: euro1.map((data) => data.high),
      backgroundColor: [
        "red",
        "pink",
        "orange",
        "yelow",
        "purple",
      ],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
});


  return (
    <div className="euro   ">
    <LineChart chartData={userData} /> 
    <br/>
    <div class="tooltip">
    <h5 className="texto">Mais Informações</h5>
    <span class="tooltiptext">Euro é a moeda oficial da zona Euro, a qual é constituída por 19 dos 27 estados-membro da União Europeia: 
    Alemanha, Áustria, Bélgica, Chipre, Eslováquia, Eslovénia, Espanha, Estónia, Finlândia, França, Grécia, Irlanda, Itália, Letónia, 
    Lituânia, Luxemburgo, Malta, Países Baixos e Portugal.</span>
    </div>
    </div>
  );
}

export default Euro;