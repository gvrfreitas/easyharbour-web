import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TableContainer } from '../styles';

function GraficoMediaDeTempo() {
 const options = {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Tempo médio de permanência (h)'
  },
  xAxis: {
      categories: ['Tempo de ocupação médio'],
  },
  yAxis: {
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
  series: [
    {
      name: 'Fundiado',
      data: [60]
  },
    {
      name: 'Porto',
      data: [80]
    },
    ]
}

    return (
        <TableContainer marginTop={"-70px"}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </TableContainer>
    );
}

export default GraficoMediaDeTempo;
