export const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Tempo Médio de Ocupação do Berço'
    },
    subtitle: {
        text: 'Data: <a href="https://en.wikipedia.org/wiki/World_population">15/11 a 21/11</a>'
    },
    xAxis: {
        categories: ['Armazém 16', 'Armazém 17', 'Armazém 19', 'Armazém 20', 'Armazém 21', 'Outeirinhos 3', 'Armazém 38', 'Armazém 39',],
        title: {
            text: "Berços"
        }
    },
    yAxis: {
        min: 0,
        max: 168,
        title: {
            text: 'Horas por semana (H)',
        }
    },
    tooltip: {
        valueSuffix: 'h'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Ocupação do berço',
        data: [50, 170, 120, 100, 75, 30, 25, 12]
    }]
}
