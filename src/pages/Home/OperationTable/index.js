import React from 'react';

import Table from '../../../components/Table';
import {getColor} from '../../../utils'

function OperationTable(props) {
  const { loadMare } = props;
  const tableHeader = [
    "Nome",
    "Berço",
    "Produto",
    "Peso Bruto(Ton)",
    "Porto destino",
    "Atracação efetiva",
    "Tempo estimado de carregamento(Laytime)",
    "Desatracação prevista",
    "Desatracação efetiva",
    "Status"
  ];

  return (
    <Table
      tableHeader={tableHeader}
      title={"Em operação"}
      marginTop={"20px"}
      loadMare={loadMare}
    >
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
        <td style= {{color: getColor("Em tempo")}}>Em tempo</td>
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
        <td style= {{color: getColor("Adiantado")}}>Adiantado </td>
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
        <td style= {{color: getColor("Atrasado")}}>Atrasado </td>
      </tr>
    </Table>

  );
}

export default OperationTable;
