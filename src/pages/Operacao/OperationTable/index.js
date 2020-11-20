import React from 'react';

import { TableContainer, Title } from '../../../components/Table/styles';
import Table from '../../../components/Table';

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
  ];

  return (
    <Table
      tableHeader={tableHeader}
      title={"Fila de operação"}
      marginTop={"-70px"}
    >
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
    </Table>

  );
}

export default OperationTable;
