import React, { useState } from 'react';

import { TableContainer, Title } from './styles';
import Loader from '../Loader';

function Table(props) {
  const { children, tableHeader, marginTop, title, loadMare } = props;
  const [loading, setLoading] = useState(true)
  return (
    <TableContainer marginTop={marginTop}>
      {
        loadMare ? (
          <Loader />
        ) : (
            <>
              <Title>{title}</Title>
              <table>
                <thead>
                  <tr>
                    {tableHeader.map(name => (
                      <th key={name}>{name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {children}
                </tbody>
              </table>
            </>
          )
      }

    </TableContainer>
  );
}

export default Table;
