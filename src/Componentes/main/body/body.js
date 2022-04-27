import Bitcoin from "../graficos/grafico_bitcoin/bitcoin_index"
import Dolar from "../graficos/grafico_dolar/dolar_index"
import Euro from "../graficos/grafico_euro/euro_index"
import "../body/body.css"

function Graphs() {

  return (
    <div className="teste">
      <Bitcoin/>
      <Dolar/>
      <Euro/>
    </div>
  );
}

export default Graphs;