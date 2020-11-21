import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TableContainer } from '../styles';

function GraficoMediaDeTempo() {
 const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
      text: 'Tempo de permanência (h)'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                style:{
                  fontSize: 13,
                },
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
            name: 'tempo',
            colorByPoint: true,
            data: [{
                name: 'Área de fudeio',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Porto',
                y: 38.59,
                sliced: false,
                selected: true
            }]
        }]
}

    return (
        <TableContainer marginTop={"-70px"}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </TableContainer>
    );
}

export default GraficoMediaDeTempo;
