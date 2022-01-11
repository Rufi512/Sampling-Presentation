import '../styles/style.css';
import '../styles/emoji.min.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Chart from 'chart.js/auto';

function importAll(r) {
    return r.keys().map(r);
}

importAll(require.context('../static/images/', false, /\.(png|jpe?g|svg)$/));

let deck = new Reveal({
    plugins: [Markdown]
})
deck.initialize({
   disableLayout: false

});


const pieData = {
    labels: [
        'Ineficiente',
        'Regular',
        'Bien',
        'Excelente'
    ],
    datasets: [{
        data: [2, 4, 9, 5],
        backgroundColor: ['#f56954', '#f39c12', '#00a65a', '#00c0ef'],
    }]
};

var pieChartCanvas = document.getElementById("myChartPie").getContext('2d')
var myChartBar1 = document.getElementById("myChartBar1").getContext("2d")
var myChartBar2 = document.getElementById("myChartBar2").getContext("2d")
var myChartBar3 = document.getElementById("myChartBar3").getContext("2d")

const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 21
                },
                fontColor: "#ffffff",
                color: "#ffffff"
            }
        },
        tooltip: {
            titleFont: {
                size: 100
            },
            bodyFont: {
                size: 20
            },
            footerFont: {
                size: 16 
            }
        }
    }
}


const optionsBar = {
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 15
                },


                color: "#ffffff"
            }
        },
        tooltip: {
            titleFont: {
                size: 30
            },
            bodyFont: {
                size: 14
            },
            footerFont: {
                size: 12
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: "#ffffff",
                font: { size: 14 }
            }
        },
        y: {
            ticks: {
                color: "#ffffff",
                font: { size: 18 }
            }
        }
    },
    responsive:true,
    maintainAspectRatio:false
}

new Chart(myChartBar1, {
    type: 'bar',
    data: {
        labels: ['Windows', 'Mac', 'Linux'],
        datasets: [{
            label: 'Windows',
            backgroundColor: "#04a8df",
            pointBorderColor: '#ffffff',
            data: [5, 0, 0]
        }, {
            label: 'Mac',
            backgroundColor: "#ffffff",
            pointBorderColor: '#ffffff',
            data: [0, 2, 0]
        }, {
            label: 'Linux',
            backgroundColor: "#ffa000",
            pointBorderColor: '#ffffff',
            data: [0, 0, 1]
        }]
    },
    options: optionsBar
})

new Chart(myChartBar2, {
    type: 'bar',
    data: {
        labels: ['Mala', 'Bien', 'Excelente'],
        datasets: [{
            label: 'Mala',
            backgroundColor: "#d81b46",
            data: [4, 0, 0]
        }, {
            label: 'Bien',
            backgroundColor: "#2bad31",
            data: [0, 10, 0]
        }, {
            label: 'Excelente',
            backgroundColor: "#2196f3",
            data: [0, 0, 6]
        }]
    },
    options: optionsBar
})

new Chart(myChartBar3, {
    type: 'bar',
    data: {
        labels: ['No', 'Talvez', 'Si'],
        datasets: [{
            label: 'No',
            backgroundColor: "#d81b46",
            data: [2, 0, 0]
        }, {
            label: 'Talvez',
            backgroundColor: "#2bad31",
            data: [0, 4, 0]
        }, {
            label: 'Si',
            backgroundColor: "#2196f3",
            data: [0, 0, 2]
        }]
    },
    options: optionsBar
})

new Chart(pieChartCanvas, {
    type: 'pie',
    data: pieData,
    options: pieOptions
})