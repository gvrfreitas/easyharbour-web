import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from '../styles';
import Loader from '../../../components/Loader';

function GraficoClima(props) {
  const { loadPrecipitacao, dataPrecipitacao, precipitacao, chovendo } = props;

  const options = {
    title: {
      text: 'Precipitação'
    },
    subtitle:{
      text: `${new Date().toLocaleDateString('pt-br')}`,
    },
    xAxis: {
      title: {
        text: 'Horário',
      },

      categories: dataPrecipitacao,
    },
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}%',
      },
      title: {
        text: 'Chance de preciptação',
      }
    }],
    tooltip: {
      shared: true
    },
    series: [{
      name: 'Preciptação',
      type: 'column',
      data: precipitacao,
      tooltip: {
        valueSuffix: ' %'
      }

    }],
  };

  return (
    <Container style={{ marginLeft: '20px', marginRight: '10px' }}>
      {
        loadPrecipitacao  ? (
          <Loader/>
        ) : (
          <>
          <span>Há chuva no momento: {chovendo ? 'Sim' : 'Não'}</span>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </>
        )
      }
    </Container>
  );
}

export default GraficoClima;
