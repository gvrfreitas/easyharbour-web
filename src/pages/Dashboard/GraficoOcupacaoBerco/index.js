import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TableContainer } from '../styles';

function GraficoPercentualPortuario() {
 const options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Status'
    },
    subtitle: {
        text: 'Data: <a href="https://en.wikipedia.org/wiki/World_population">15/11 a 21/11</a>'
    },
    xAxis: {
        categories: ['Fundiados', 'Operação'],
        title: {
            text: "Status"
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Porcentagem por semana (%)',
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Atrasados',
        data: [50, 70]
    }, {
        name: 'Em Tempo',
        data: [23, 69]
    }, {
        name: 'Adiantados',
        data: [23, 69]
    }]
}

    return (
        <TableContainer marginTop={"-70px"}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </TableContainer>
    );
}

export default GraficoPercentualPortuario;
