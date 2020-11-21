import React from 'react';
import styled from 'styled-components';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TableContainer } from '../styles';

const InfoPrecisamMare = styled.div`
    border: solid;
    border-width: 0px 1px 0px 0px;
    padding: 17px 12px 0px 37px;
    justify-content: center;

    h1{
      margin-left: 20%;
    }

    ul{
      margin-top: 20px;
      li{
          font-size: 25px;
          list-style-type: none;

          h2{
            padding: 10px 0px 0px 0px;
            margin-left: 30%;
            font-size: 60px;
          }
        }
    }

`;

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  margin-top: 20px;
  margin-left:20px;
  margin-right:20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow-x: auto;
  display:flex;
  width: 50%;
}
`;

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
        <h1>Navio x Maré</h1>
        <div style={{ display: "flex" }}>
          <ul>
            <li>Necessidade de maré para manobra</li>
            <li><h2>40%</h2></li>
            <li style={{marginTop: "15px"}}>Perderam maré de saída do berço</li>
            <li><h2>20</h2></li>
          </ul>
        </div>
      </InfoPrecisamMare>
      <div style={{ width: "50%" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </Container>
  );
}

export default InfoNavios;
