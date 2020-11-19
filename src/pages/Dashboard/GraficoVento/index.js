import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from '../styles';

function GraficoVento() {
  const [data, setData] = useState([100, 200, 30, 100, 50, 30, 50, 60, 70, 80, 90, 9, 0, 90, 8, 80, 5, 50, 5])
  const options = {
    title: {
      text: 'Velocidade do vento'
    },
    xAxis: {
      title: {
        text: 'Horário',
      },
      categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    },
    yAxis: {
      title: {
        text: 'Velocidade do vento(km/h)'
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
        name: "Velocidade",
        color: "rgb(67, 67, 72)",
        data: data,
        tooltip: {
          valueSuffix: ' Km'
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

export default GraficoVento;
