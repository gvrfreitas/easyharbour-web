import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from '../styles';

function GraficoMare() {
  const [data, setData] = useState([1, 2, 3, 1, 5, 3, 5, 6, 7, 8, 9, 9, 2, 9, 8, 8, 5, 5, 5])
  const options = {
    title: {
      text: 'Maré'
    },
    xAxis: {
      title: {
        text: 'Horário',
      },
      categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    },
    yAxis: {
      title: {
        text: 'Altura da maré(m)'
      }

    },
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

    series: [
      {
        type: 'line',
        name: "Maré",
        color: "rgb(67, 67, 72)",
        data: data,
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
