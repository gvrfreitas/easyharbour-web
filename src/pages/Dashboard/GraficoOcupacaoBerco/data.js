export const options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Status'
    },
    subtitle: {
        text: 'Data: <a href="https://en.wikipedia.org/wiki/World_population">15/11 a 21/11</a>'
    },
    xAxis: {
        categories: ['Fundiados', 'Operação'],
        title: {
            text: "Status"
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Porcentagem por semana (%)',
        }
    },
    tooltip: {
        valueSuffix: '%'
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
        name: 'Atrasados',
        data: [50, 70]
    }, {
        name: 'Em Tempo',
        data: [23, 69]
    }, {
        name: 'Adiantados',
        data: [23, 69]
    }]
}
