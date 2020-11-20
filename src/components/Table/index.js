import React from 'react';

import { TableContainer, Title } from './styles';




function Table(props) {
  const { children, tableHeader, marginTop } = props;
  return (
    <TableContainer marginTop={marginTop}>
      <Title>Fila de atracação</Title>
      <table>
        <thead>
          <tr>
            {tableHeader.map(name => (
              <th>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default Table;
