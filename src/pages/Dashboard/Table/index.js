import React from 'react';

import { TableContainer, Title } from './styles';

function Table() {
  return (
    <TableContainer>
      <Title>Fila de atracação</Title>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome do navio</th>
            <th>Draft (Calado) (m)</th>
            <th>Beam (Largura) (m)</th>
            <th> ATA (Data de chegada)</th>
            <th>WT (Tempo de espera)</th>
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
            <td></td>
            <td>38</td>
            <td>Adiantado</td>
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
            <td></td>
            <td>38</td>
            <td>Adiantado</td>
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
            <td></td>
            <td>38</td>
            <td>Adiantado</td>
          </tr>
        </tbody>

      </table>
    </TableContainer>
  );
}

export default Table;
