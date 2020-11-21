import React, { useState, useEffect } from 'react';

import LineUpTable from './LineUpTable';
import LineUpTableSugestion from './LineUpTableSugestion';
import GraficoClima from './GraficoClima';
import GraficoMare from './GraficoMare';
import OperationTable from './OperationTable';

import { getClima } from '../../services/index';


function Home() {
  const [dataClima, setDataClima] = [];

  useEffect(() => {
    getDataClima();
  }, [])

  async function getDataClima() {
    try {
      const response = await getClima();

      setDataClima(response.data);
    } catch (err) {
      console.log("Não funcionou");
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GraficoClima />
        <GraficoMare />
      </div>
      <LineUpTable />
      <LineUpTableSugestion/>
      <OperationTable />
    </>
  );
}

export default Home;
