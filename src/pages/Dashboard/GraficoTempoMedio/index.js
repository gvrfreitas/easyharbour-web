import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TableContainer } from '../styles';

function GraficoTempoMedio() {
 const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Tempo médio de ocupação'
    },
    subtitle: {
        text: 'Semana: <a href="https://en.wikipedia.org/wiki/World_population">15/11 a 21/11</a>'
    },
    xAxis: {
        categories: ['Armazém 16', 'Armazém 17', 'Armazém 19', 'Armazém 20', 'Armazém 21', 'Outeirinhos 3', 'Armazém 38', 'Armazém 39',],
        title: {
            text: "Berços"
        }
    },
    yAxis: {
        min: 0,
        max: 168,
        title: {
            text: 'Horas (H)',
        }
    },
    tooltip: {
        valueSuffix: 'h'
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
        name: 'Ocupação do berço',
        data: [50, 170, 120, 100, 75, 30, 25, 12]
    }]
}
    return (
        <TableContainer marginTop={"-70px"}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </TableContainer>
    );
}

export default GraficoTempoMedio;
