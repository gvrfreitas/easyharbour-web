import React from 'react';

import { TableContainer, Title, Tr, Container } from './styles';

import FundiadosTable from './FundiadosTable';
import GraficoClima from './GraficoClima';
import GraficoVento from './GraficoVento';


function Dashboard() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GraficoClima />
        <GraficoVento />
      </div>
      <FundiadosTable />
    </>
  );
}

export default Dashboard;
