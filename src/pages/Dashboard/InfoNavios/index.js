import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Container, InfoPrecisamMare, Box  } from './styles';



function InfoNavios() {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Efetivação do Line Up sugerido'
    },
    xAxis: {
      categories: ['Efetivação']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
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
      name: 'Não efetivado',
      data: [6]
    },
    {
      name: 'Efetivado',
      data: [4],
    }]
  }

  return (
    <Container>
      <InfoPrecisamMare >
        <span>Navio x Maré</span>
        <div>
          <Box>
            <span>Necessidade de maré para manobra</span>
            <p>40%</p>
          </Box>
          <Box style={{marginTop: "20px"}}>
            <span>Perderam maré de saída do berço</span>
            <p>20</p>
          </Box>
        </div>
      </InfoPrecisamMare>
      <div style={{ width: "50%" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </Container>
  );
}

export default InfoNavios;
