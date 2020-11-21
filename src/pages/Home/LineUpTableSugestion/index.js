import React from 'react';

import Table from '../../../components/Table';
import { getColor } from '../../../utils'

function LineUpTableSugestion() {
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
    "Atracação sugerida",
    "Berço",
  ];

  return (
    <Table
      tableHeader={tableHeader}
      title={"Line up - Sugerido"}
      marginTop={"20px"}
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
        <td></td>
        <td>38</td>
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
        <td></td>
        <td>38</td>
      </tr>
      <tr>
        <td>3°</td>
        <td>CUMA</td>
        <td> 12</td>
        <td> 229</td>
        <td>10/11/2020 17:30:00</td>
        <td>2horas</td>
        <td>Milho a granel</td>
        <td>61200</td>
        <td>8</td>
        <td></td>
        <td>38</td>
      </tr>
    </Table>
  );
}

export default LineUpTableSugestion;
