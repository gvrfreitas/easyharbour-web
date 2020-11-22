import React from 'react';

import Table from '../../../components/Table';
import {getColor} from '../../../utils'

function LineUpTable(props) {
  const { loadMare } = props;
  const tableHeader = [
    "Posição",
    "Navio",
    "Calado(m)",
    "Largura(m)",
    "Data de chegada",
    "Tempo de espera(h)",
    "Produto",
    "Capacidade(Ton)",
    "Prioridade",
    "Programado",
    "Atracação prevista",
    "Berço",
    "Status",
  ];

  return (
    <Table
      tableHeader={tableHeader}
      title={"Line up - Programado"}
      marginTop={"20px"}
      loadMare={loadMare}
    >
      <tr>
        <td>1°</td>
        <td>ALEXANDRA KPN</td>
        <td> 12</td>
        <td> 229</td>
        <td>22/11/2020 17:30:00</td>
        <td>1horas</td>
        <td>Milho a granel</td>
        <td>61200</td>
        <td>8</td>
        <td>Sim</td>
        <td>22/11/2020 18:30:00</td>
        <td>Armazén 19</td>
        <td style= {{color: getColor("Adiantado")}}>Adiantado</td>
      </tr>
      <tr>
        <td>2°</td>
        <td>AMALTHIA</td>
        <td> 12</td>
        <td> 229</td>
        <td>22/11/2020 19:00:00</td>
        <td>1horas</td>
        <td>Milho a granel</td>
        <td>61200</td>
        <td>8</td>
        <td>Sim</td>
        <td>22/11/2020 20:00:00</td>
        <td>Armazén 19</td>
        <td style= {{color: getColor("Atrasado")}}>Atrasado</td>
      </tr>
      <tr>
        <td>3°</td>
        <td>BOW FORTUNE</td>
        <td> 12</td>
        <td> 229</td>
        <td>22/11/2020 19:00:00</td>
        <td>2horas</td>
        <td>Milho a granel</td>
        <td>61200</td>
        <td>9</td>
        <td>Sim</td>
        <td>22/11/2020 21:00:00</td>
        <td>Armazén 19</td>
        <td style= {{color: getColor("Em tempo")}}>Em tempo</td>
      </tr>
    </Table>
  );
}

export default LineUpTable;
