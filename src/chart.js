import Bar from './charts/Chart.Bar'
import Bubble from './charts/Chart.Bubble'
import Doughnut from './charts/Chart.Doughnut'
import Line from './charts/Chart.Line'
import PolarArea from './charts/Chart.PolarArea'
import Radar from './charts/Chart.Radar'
import Scatter from './charts/Chart.Scatter'

const Chart = window.Chart = module.exports = require('./core/core.js')

Chart.registerChart(Bar)
Chart.registerChart(Bubble)
Chart.registerChart(Doughnut)
Chart.registerChart(Line)
Chart.registerChart(PolarArea)
Chart.registerChart(Radar)
Chart.registerChart(Scatter)
