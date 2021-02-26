let randomNumbersArr = []

function getPointCategoryName(point, dimension) {
  var series = point.series,
      isY = dimension === 'y',
      axis = series[isY ? 'yAxis' : 'xAxis'];
  return axis.categories[point[isY ? 'y' : 'x']];
}

const randomPointsGenerator = () => {

  let mainRandomArr = []
  let firstNum = 0
  
  while(firstNum < 15) {
    let secondNum = 0
    

    while(secondNum < 5) {
      const randomArr = [firstNum]

      randomArr.push(secondNum)
      randomArr.push(Math.floor(Math.random() * 100))
      mainRandomArr.push(randomArr)
      secondNum++
    }
    firstNum++
  }

  return mainRandomArr
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("Starting highcharts")
  const randomBtn = document.getElementById("random_btn")

  const chart = Highcharts.chart('container_chart', {
    navigation: {
      buttonOptions: {
          enabled: false
      }
  },

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Random generated points'
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>X </b>value is ' + this.point.x + '<br><b>Y</b> value is '+ this.point.y + '<br><b>Random: </b>' +
                this.point.value;
        }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
        }]
    }

});

// Randomize button function.
randomBtn.addEventListener("click", (e) => {
  e.preventDefault()
  randomNumbersArr = randomPointsGenerator()

  if (chart.series) {
    let n = 0
    chart.series.forEach((arr) => {
      chart.series[n].remove()
      n++
    })
  }

  chart.addSeries({
    name: 'Random numbers',
    borderWidth: 1,
    data: randomNumbersArr,
    dataLabels: {
        enabled: true,
        color: '#000000'
    }
  })
})

// Add point.

const addBtn = document.getElementById("add_btn")
addBtn.addEventListener("click", e => {
  e.preventDefault()
  let highestArray = [0, 0]
  randomNumbersArr.forEach(elem => {
    if (highestArray[0] < elem[0]) {
      highestArray[0] = elem[0]
    } 
    if (highestArray[1] < elem[1]) {
      highestArray[1] = elem[1]
    } 
  })

  const newSeriesArr = randomNumbersArr
  newSeriesArr.push([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 100)])

  if (chart.series) {
    let n = 0
    chart.series.forEach((arr) => {
      chart.series[n].remove()
      n++
    })
  }

  chart.addSeries({
    name: 'Random numbers',
    borderWidth: 1,
    data: newSeriesArr,
    dataLabels: {
        enabled: true,
        color: '#000000'
    }
  })
})

});