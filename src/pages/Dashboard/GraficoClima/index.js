import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from '../styles';

function GraficoClima() {
  const options = {
    title: {
      text: 'Maré e preciptação'
    },
    xAxis: {
      title: {
        text: 'Horário',
      },

      categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    },
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}mm',

      },
      title: {
        text: 'Volume de preciptação',

      }
    }, { // Secondary yAxis
      title: {
        text: 'Amplitude de maré',

      },
      labels: {
        format: '{value}m',

      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 50,
      floating: true,
      backgroundColor:
        'rgba(255,255,255,0.25)'
    },

    series: [{
      name: 'Preciptação',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: ' mm'
      }

    }, {
      name: 'Maré',
      type: 'spline',
      data: [7.0, 6.9, 20, 25, 22, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: 'm'
      }
    }],
  };

  return (
    <Container style={{ marginLeft: '20px', marginRight: '10px' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
}

export default GraficoClima;