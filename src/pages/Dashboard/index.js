import React from 'react';

import { TableContainer, Title, Tr, Container } from './styles';
import Header from '../../components/Header';
import Table from './Table'
import SimpleLineChart from '../../components/GraficoClima';

function Dashboard() {
  return (
    <>
      <Header />
      {/* <Container>
          <SimpleLineChart>

          </SimpleLineChart>
        </Container> */}
        <Table/>

    </>
  );
}

export default Dashboard;