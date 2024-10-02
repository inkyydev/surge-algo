




function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.opacity = "1";
  }
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.opacity = "0";
  }
// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 215, 71, .5)');
gradient.addColorStop(0.3, 'rgba(0, 215, 71, 0.3)');
gradient.addColorStop(0.7, 'rgba(0, 215, 71, 0)');


var data  = {
    labels: [ 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [{
			label: 'Custom Label Name $',
			backgroundColor: gradient,
			pointBackgroundColor: '#00D747',
			borderWidth: 1,
			borderColor: '#00D747',
			data: [0, 20, 40, 60, 80, 100, 120, 140]
    }]
};


var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(129, 132, 140, 0.21)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(129, 132, 140, 0.21)',
				lineWidth: 1
			},
			ticks: {
				callback: function(label, index, labels) {
				   return '$'+label;
				}
			  },
		}]
	},
	elements: {
		line: {
			tension: 0.8
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Poppins',
		backgroundColor: 'rgba(0,0,0,0.7)',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
	options: options
});