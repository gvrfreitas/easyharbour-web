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
        <td>CUMA</td>
        <td>Armazén 19</td>
        <td>Soja</td>
        <td> 229</td>
        <td>Santos-SP</td>
        <td>22/11/2020 10:30:00</td>
        <td>2horas</td>
        <td>22/11/2020 18:00:00</td>
        <td>22/11/2020 18:00:00</td>
        <td style= {{color: getColor("Em tempo")}}>Em tempo</td>
      </tr>
      <tr>
        <td>BIRDIE TRADER</td>
        <td>Armazén 20</td>
        <td>Soja</td>
        <td> 250</td>
        <td> Santos-SP</td>
        <td>22/11/2020 11:30:00</td>
        <td>3horas</td>
        <td>22/11/2020 19:00:00</td>
        <td>22/11/2020 19:00:00</td>
        <td style= {{color: getColor("Em tempo")}}>Em tempo</td>
      </tr>
      <tr>

        <td>AMELIA PACIFIC</td>
        <td>Armazén 21</td>
        <td>Milho a granel</td>
        <td> 300</td>
        <td>Santos-SP</td>
        <td>22/11/2020 12:30:00</td>
        <td>2horas</td>
        <td>22/11/2020 20:00:00</td>
        <td>22/11/2020 20:00:00</td>
        <td style= {{color: getColor("Em tempo")}}>Em tempo</td>
      </tr>
    </Table>

  );
}

export default OperationTable;
