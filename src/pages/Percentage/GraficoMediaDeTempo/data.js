export const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Tempo Médio de Ocupação do Berço'
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
            name: 'Ocupação no Berço',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Tempo médio de permanência',
            y: 38.59,
            sliced: false,
            selected: true
        }]
    }]
}