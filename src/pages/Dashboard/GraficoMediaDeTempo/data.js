export const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Tempo médio de permanência'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'tempo',
        colorByPoint: true,
        data: [{
            name: 'Área de fudeio',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Porto',
            y: 38.59,
            sliced: false,
            selected: true
        }]
    }]
}
