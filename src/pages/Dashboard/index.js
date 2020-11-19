import React from 'react';

import { TableContainer, Title, Tr, Container } from './styles';
import Header from '../../components/Header';
import FundiadosTable from './FundiadosTable';
import OperationTable from './OperationTable';
import GraficoClima from './GraficoClima';

function Dashboard() {
  return (
    <>
      <Header />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Container style={{marginLeft: '20px',marginRight: '10px'}}>
          <GraficoClima />
        </Container>
        <Container style={{marginRight: '20px'}}>
          <GraficoClima />
        </Container>
      </div>
      <FundiadosTable />
      <OperationTable />

    </>
  );
}

export default Dashboard;
