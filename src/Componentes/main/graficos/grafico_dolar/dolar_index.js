import "../grafico_dolar/dolar_style.css";
import LineChart from "../../Tipo_graficos/LineChart";
import React,{useState } from 'react'
import api_dolar from '../../../../Apis/Dolar'
//{}

function Dolar() {  
  const [dolar1,setDolar] = useState ([])
  
  api_dolar.get('7').then( ({data}) => {
    setDolar(data)
    console.log(data)
  })

  const userData = ({ labels: dolar1.slice(0).map(z => new Date(z.timestamp*1000).toLocaleDateString("pt-BR")),
    datasets: [{
        label: "Valor do Dólar comparado ao real",
        data: dolar1.map((data) => data.high),
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

      <div className="dolar ">
        
        <LineChart chartData={userData} /> 
        <br/>
        <div class="tooltip">
        <h5 className="texto">Mais Informações Sobre o Dolar</h5>
        <span class="tooltiptext">O dólar dos Estados Unidos, também conhecido como dólar estadunidense ou dólar americano é a moeda oficial dos Estados Unidos
         e utilizada no mundo inteiro, tanto em reservas internacionais, como em livre circulação em alguns países. 
         Atualmente, sua expedição é controlada pela Reserva Federal dos Estados Unidos</span>
        </div>
        </div>
  );
}

export default Dolar;