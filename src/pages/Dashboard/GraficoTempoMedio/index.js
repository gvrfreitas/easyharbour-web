import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { options } from './data';

import { TableContainer } from '../styles';

function GraficoTempoMedio() {
    return (
        <TableContainer marginTop={"-70px"}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </TableContainer>
    );
}

export default GraficoTempoMedio;
