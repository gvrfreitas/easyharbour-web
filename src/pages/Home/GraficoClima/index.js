import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from '../styles';
import Loader from '../../../components/Loader';

function GraficoClima() {
  const [loading, setLoading] = useState(true)
  const options = {
    title: {
      text: 'Precipitação'
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
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 50],
      tooltip: {
        valueSuffix: ' mm'
      }

    }],
  };

  return (
    <Container style={{ marginLeft: '20px', marginRight: '10px' }}>
      {
        // loading ? (
        //   <Loader/>
        // ) : (
          <HighchartsReact highcharts={Highcharts} options={options} />
        //)
      }
    </Container>
  );
}

export default GraficoClima;
