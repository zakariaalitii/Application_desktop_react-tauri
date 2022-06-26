/* App.js */
import React,{Component}  from 'react'
import { useSelector } from 'react-redux'
import CanvasJSReact from '../assets//canvasjs-stock-1.4.12/canvasjs.stock.react';
import ThemeAction from '../redux/actions/ThemeAction'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   
var xVal = dps.length + 1;
var yVal = 15;
var dps2 = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   
var xVal2 = dps.length + 1;
var yVal2 = 15;
var updateInterval = 1000;

class Categories extends Component {
    
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
        yVal2 = yVal2 +  Math.round(5 + Math.random() *(-5-5));
		dps2.push({x: xVal2,y: yVal2});
		xVal2++;
		if (dps2.length >  10 ) {
			dps2.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			title :{
				text: "CPU"
			},
			data: [{
				type: "line",
				name: "Store Customers",
				showInLegend: true,
				dataPoints : dps
			},
            {
				type: "line",
				name: "Online Customers",
				showInLegend: true,
				dataPoints : dps2
			}
        ]
		}
      
		return (
			<body>
		
			<div className="col-12">
			<div className="card card2">
				<div className="card__body">
				<CanvasJSChart 
						options = {options}
						onRef={
							ref => this.chart = ref
						}
						height='100%'
						margin='30px'
					/>
				</div>
			</div>
		</div>
		</body>
		);
	}
}

export default Categories