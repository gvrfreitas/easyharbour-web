import React, { useState, useEffect } from 'react';

import LineUpTable from './LineUpTable';
import LineUpTableSugestion from './LineUpTableSugestion';
import GraficoClima from './GraficoClima';
import GraficoMare from './GraficoMare';
import OperationTable from './OperationTable';

import { getMare } from '../../services/index';



function Home() {
  const [mare, setMare] = useState([]);
  const [dataMare, setDataMare] = useState([])
  const [loadMare, setLoadMare] = useState(true);
  const option = {
    hour: 'numeric',
    minute: 'numeric'
  }

  useEffect(() => {
    getDadosMare()
  }, []);

  async function getDadosMare() {
    try {
      const response = await getMare();

      const dataOrdenada = response.data.sort((a, b) => {
        if (new Date(a.data).getTime() > new Date(b.data).getTime())
          return 1
        if (new Date(b.data).getTime() > new Date(a.data).getTime())
          return -1

        return 0
      });

      const mareDataActual = dataOrdenada.filter(item => item.data ? new Date().getDate() === new Date(item.data).getDate() : '');

      const dataFormatada = mareDataActual.map(item => `${addZero(new Date(item.data).getHours())}:${new Date(item.data).getMinutes()}`);

      const mareFormatada = mareDataActual.map(item => item.altura);

      setDataMare(dataFormatada);
      setMare(mareFormatada);
      setLoadMare(false);
    } catch (err) {
      console.log("Requisição falhou")
    }
  }

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GraficoClima loadMare={loadMare}/>
        <GraficoMare
          mare={mare}
          dataMare={dataMare}
          loadMare={loadMare}
        />
      </div>
      <LineUpTable loadMare={loadMare}/>
      <LineUpTableSugestion loadMare={loadMare}/>
      <OperationTable loadMare={loadMare}/>
    </>
  );
}

export default Home;
