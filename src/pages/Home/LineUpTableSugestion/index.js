import React from 'react';

import Table from '../../../components/Table';


function LineUpTableSugestion() {
  const tableHeader = [
    "Posição",
    "Navio",
    "Draft",
    "Beam",
    "ATA",
    "WT",
    "Produto",
    "Capacidade ",
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
        <td></td>
        <td>38</td>
        <td>Adiantado</td>
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
        <td></td>
        <td>38</td>
        <td>Adiantado</td>
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
        <td>Sim</td>
        <td></td>
        <td>38</td>
        <td>Adiantado</td>
      </tr>
      <tr>
        <td>4°</td>
        <td>CUMA</td>
        <td> 12</td>
        <td> 229</td>
        <td>10/11/2020 17:30:00</td>
        <td>2horas</td>
        <td>Milho a granel</td>
        <td>61200</td>
        <td>8</td>
        <td>Sim</td>
        <td></td>
        <td>38</td>
        <td>Adiantado</td>
      </tr>
    </Table>
  );
}

export default LineUpTableSugestion;
