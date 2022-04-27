import "../grafico_bitcoin/bitcoin_style.css";
import LineChart from "../../Tipo_graficos/LineChart";
import React,{useState } from 'react'
import api_bitcoin from '../../../../Apis/Bitcoin'


function Bitcoin() {

  const [bitcoin1,setBitcoin] = useState ([])
  
  api_bitcoin.get('7').then( ({data}) => {
    setBitcoin(data)
    // console.log(data)
  })


  const userData = ({ labels: bitcoin1.slice(0).map(z => new Date(z.timestamp*1000).toLocaleDateString("pt-BR")),
    datasets: [{
      label: "Valor do Bitcoin comparado ao real",
        data: bitcoin1.map((data) => data.high),
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
    <div className="bitcoin ">
    <LineChart chartData={userData} /> 
    <br/>
    <div class="tooltip">
      <h5 className="texto">Mais Informações</h5>
      <span class="tooltiptext">O bitcoin foi a primeira moeda virtual do mundo. Ou seja, ela não existe em papel nem em nenhum lugar além de sistemas digitais. 
      Além disso, é uma moeda descentralizada, o que significa que não existem bancos ou governos que atuam como intermediários.
      O bitcoin é uma criptomoeda, termo usado para moedas que só existem na internet. Apesar de serem reais, não há versão física desse dinheiro. Além disso, são as próprias pessoas que, de forma geral, 
      podem enviar ou receber bitcoins. </span>
      </div>
    </div>
  );
}

export default Bitcoin;