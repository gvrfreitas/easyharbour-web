import React from 'react';
import styled from 'styled-components';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TableContainer } from '../styles';

const InfoPrecisamMare = styled.div`
    border: solid;
    border-width: 0px 1px 0px 0px;
    padding: 4px 18px 0px 18px;
    justify-content: center;
    width: 50%;

    span{
      margin-left: 15%;
      color: #333333;
      font-size: 25px;
      fill: #333333;
    }

    ul{
      margin-top: 30px;
      li{
        font-size: 20px;
        list-style-type: none;
        text-align: center;

          h2{
            text-align:left;
            padding: 10px 0px 0px 30px;
            margin-left: 30%;
            font-size: 20px;
          }
        }
    }

`;

export const Box = styled.div`
  margin-top: 30px;
  background:rgb(124, 181, 236);
  width: 100%;
  color:#fff;
  font-size: 16px;
  padding: 3px 12px 3px 5px;
  height: 140px;

    span{
    color:#fff;
    font-size: 15px;
    margin-left: 0px;
    }

    p{
    margin-top: 60px;
    font-size: 30px;
    float:right;
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
