import React from 'react';

import { TableContainer, Title } from '../styles';

function OperationTable() {
  const tableHeader = [
    "Nome",
    "Berço",
    "Produto",
    "Peso bruto",
    "Porto destino",
    "Atracação efetiva",
    "Laytime",
    "Desatracação prevista",
    "Desatracação efetiva",
    "Status"
  ]

  return (
    <TableContainer marginTop='20px'>
      <Title>Fila de operação</Title>
      <table >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Berço</th>
            <th>Produto</th>
            <th>Peso bruto</th>
            <th>Porto destino</th>
            <th>Atracação efetiva</th>
            <th>Laytime</th>
            <th>Desatracação prevista</th>
            <th>Desatracação efetiva</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1°</td>
            <td>asjdhjsanfnsadnffsn</td>
            <td> 12</td>
            <td> 229</td>
            <td>10/11/2020 17:30:00</td>
            <td>2horas</td>
            <td>Milho a granel</td>
            <td>61200</td>
            <td>8</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>2°</td>
            <td>CUMA</td>
            <td> 12</td>
            <td> 229</td>
            <td>10/11/2020 17:30:00</td>
            <td>2horas</td>
            <td>Milho a granel</td>
            <td>61200</td>
            <td>8</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>1°</td>
            <td>CUMA</td>
            <td> 12</td>
            <td> 229</td>
            <td>10/11/2020 17:30:00</td>
            <td>2horas</td>
            <td>Milho a granel</td>
            <td>61200</td>
            <td>8</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>1°</td>
            <td>CUMA</td>
            <td> 12</td>
            <td> 229</td>
            <td>10/11/2020 17:30:00</td>
            <td>2horas</td>
            <td>Milho a granel</td>
            <td>61200</td>
            <td>8</td>
            <td>Sim</td>
          </tr>
        </tbody>

      </table>
    </TableContainer>
  );
}

export default OperationTable;
