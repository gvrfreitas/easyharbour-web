import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TableContainer } from '../styles';

function GraficoAtracacao() {
 const options = {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Cumprimento de horário previsto'
  },
  xAxis: {
      categories: ['Atracação', 'Desatracação']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Porcentagem'
      },
      labels: {
        format: '{value}%',
      }
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
  },
  plotOptions: {
      column: {
          stacking: 'percent'
      }
  },
  series: [{
      name: 'No horário',
      data: [5, 3]
  }, {
      name: 'Fora do horário',
      data: [2, 2]
  }]
}

    return (
        <TableContainer marginTop={"20px"}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </TableContainer>
    );
}

export default GraficoAtracacao;
