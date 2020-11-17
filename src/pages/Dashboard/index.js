import { React } from 'react';

import { TableContainer, Title, Tr } from './styles';
import Header from '../../components/Header';

function Dashboard() {
  return (
    <>
      <Header />
      <TableContainer>
        <Title>Fila de atracação</Title>
        <table>
          <th>Nome do navio</th>
          <th>Produto</th>
          <th>Status</th>
          <th>LOA</th>
          <th>Beam</th>
          <th>Draft</th>

          <Tr backgroundColor="#ef9d52">
            <td>Bram Brasil</td>
            <td>Soja</td>
            <td>Atracado</td>
            <td>12m</td>
            <td>50m</td>
            <td>15m</td>
          </Tr>
          <Tr backgroundColor="#739b65">
            <td>Bram Brasil</td>
            <td>Soja</td>
            <td>Atracado</td>
            <td>12m</td>
            <td>50m</td>
            <td>15m</td>
          </Tr>
          <Tr backgroundColor="#a13939">
            <td>Bram Brasil</td>
            <td>Soja</td>
            <td>Atracado</td>
            <td>12m</td>
            <td>50m</td>
            <td>15m</td>
          </Tr>

        </table>

      </TableContainer>

    </>
  );
}

export default Dashboard;
