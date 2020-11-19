import React from 'react';

import { TableContainer, Title } from '../styles';

function FundiadosTable() {
  return (
    <TableContainer marginTop={"-70px"}>
      <Title>Fila de atracação</Title>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Navio</th>
            <th>Draft</th>
            <th>Beam</th>
            <th>ATA</th>
            <th>WT</th>
            <th>Produto</th>
            <th>Capacidade </th>
            <th>Prioridade</th>
            <th>Programado</th>
            <th>Atracação prevista</th>
            <th>Berço</th>
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
        </tbody>

      </table>
    </TableContainer>
  );
}

export default FundiadosTable;
