import React from 'react';

import { TableContainer, Title, Tr, Container } from './styles';
import Header from '../../components/Header';
import FundiadosTable from './FundiadosTable';
import OperationTable from './OperationTable';
import SimpleLineChart from '../../components/GraficoClima';

function Dashboard() {
  return (
    <>
      <Header />
      {/* <Container>
          <SimpleLineChart>

          </SimpleLineChart>
        </Container> */}
        <FundiadosTable/>
        <OperationTable/>

    </>
  );
}

export default Dashboard;
