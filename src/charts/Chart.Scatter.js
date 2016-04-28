export default {
  config: {
    type: 'scatter',
  },
  hover: {
    mode: 'single',
  },

  scales: {
    xAxes: [{
      type: 'linear', // scatter should not use a category axis
      position: 'bottom',
      id: 'x-axis-1', // need an ID so datasets can reference the scale
    }],
    yAxes: [{
      type: 'linear',
      position: 'left',
      id: 'y-axis-1',
    }],
  },

  tooltips: {
    callbacks: {
			// Title doesn't make sense for scatter since we format the data as a point
      title: () => '',
      label: tooltipItem => `(${tooltipItem.xLabel}, ${tooltipItem.yLabel})`
    },
  },
}
