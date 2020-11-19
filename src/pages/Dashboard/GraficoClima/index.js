import React, {useState} from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function GraficoClima() {
  const [data, setData] = useState([100, 200, 30, 100, 50, 30,50,60,70,80,90,9,0,90,8,80,5,50,5])
  const options = {
  title: {
      text: 'Browser market shares. January, 2018'
  },
  subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  xAxis: {
    title:{
      text: 'Horas',
    },
      categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00","09:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }

  },
  legend: {
      enabled: false
  },
  // plotOptions: {
  //     series: {
  //         pointPadding: 0.4,
  //         borderWidth: 0,
  //         dataLabels: {
  //             enabled: true,
  //             format: '{point.y:.1f}%'
  //         }
  //     }
  // },

  // tooltip: {
  //     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  //     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  // },

  series: [
      {
        type:'column',
          name: "Browsers",
          colorByPoint: true,
          data: [
              {
                  name: 1,
                  y: 62.74,
              },
              {
                  name: "Firefox",
                  y: 10.57,
              },
              {
                  name: "Internet Explorer",
                  y: 7.23,
              },
              {
                  name: "Safari",
                  y: 5.58,
              },
              {
                  name: "Edge",
                  y: 4.02,
              },
              {
                  name: "Opera",
                  y: 1.92,
              },
              {
                  name: "Other",
                  y: 7.62,
              }
          ],
      },{
        type:'line',
        name: "Profit",
        data: data,
      }

  ],
  center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
  };

  return(
    <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
  );
}

export default GraficoClima;
