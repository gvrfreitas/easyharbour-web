import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from '../styles';

function GraficoMare(props) {
  const { mare, dataMare } = props;

  const options = {
    title: {
      text: 'Maré'
    },
    subtitle:{
      text: `${new Date().toLocaleDateString('pt-br')}`,
    },
    xAxis: {
      title: {
        text: 'Horário',
      },
      categories: dataMare,
    },
    yAxis: {
      labels: {
        format: '{value}m',
      },
      title: {
        text: 'Altura da maré(m)'
      }

    },
    tooltip: {
      shared: true
    },
    series: [
      {
        type: 'line',
        name: "Maré",
        color: "rgb(67, 67, 72)",
        data: mare,
        tooltip: {
          valueSuffix: ' m'
        }
      }

    ],
    center: [100, 80],
    size: 100,
    showInLegend: false,
    dataLabels: {
      enabled: false
    }
  };

  return (
    <Container style={{ marginRight: '20px' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
}

export default GraficoMare;
