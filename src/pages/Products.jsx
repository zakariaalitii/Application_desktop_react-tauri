import React,{Component}  from 'react'

import CanvasJSReact from '../assets//canvasjs-stock-1.4.12/canvasjs.stock.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
class Products extends Component {
    render() {
      const options = {
        animationEnabled: true,	
        title: {
            text: "Memory"
        },
        charts: [{
            toolTip: {
                shared: true
            },
            data: [{
                
              type: "line",
              name: "Store Customers",
              showInLegend: true,
              dataPoints: [
            { x: new Date("2018-01-01"), y: 71},
            { x: new Date("2018-02-01"), y: 55 },
            { x: new Date("2018-03-01"), y: 50 },
            { x: new Date("2018-04-01"), y: 65 },
            { x: new Date("2018-05-01"), y: 95 },
            { x: new Date("2018-06-01"), y: 68 },
            { x: new Date("2018-07-01"), y: 28 },
            { x: new Date("2018-08-01"), y: 34 },
            { x: new Date("2018-09-01"), y: 14 },
            { x: new Date("2018-10-01"), y: 71 },
            { x: new Date("2018-11-01"), y: 55 },
            { x: new Date("2018-12-01"), y: 50 },
            { x: new Date("2019-01-01"), y: 34 },
            { x: new Date("2019-02-01"), y: 50 },
            { x: new Date("2019-03-01"), y: 50 },
            { x: new Date("2019-04-01"), y: 95 },
            { x: new Date("2019-05-01"), y: 68 },
            { x: new Date("2019-06-01"), y: 28 },
            { x: new Date("2019-07-01"), y: 34 },
            { x: new Date("2019-08-01"), y: 65 },
            { x: new Date("2019-09-01"), y: 55 },
            { x: new Date("2019-10-01"), y: 71 },
            { x: new Date("2019-11-01"), y: 55 },
            { x: new Date("2019-12-01"), y: 50 }
            ]
           },
           {
            type: "line",
            name: "Online Customers",
            showInLegend: true,
            dataPoints: [
          { x: new Date("2018-01-01"), y: 10 },
          { x: new Date("2018-02-01"), y: 20 },
          { x: new Date("2018-03-01"), y: 90 },
          { x: new Date("2018-04-01"), y: 90 },
          { x: new Date("2018-05-01"), y: 90 },
          { x: new Date("2018-06-01"), y: 90 },
          { x: new Date("2018-07-01"), y: 28 },
          { x: new Date("2018-08-01"), y: 10 },
          { x: new Date("2018-09-01"), y: 90 },
          { x: new Date("2018-10-01"), y: 55 },
          { x: new Date("2018-11-01"), y: 77 },
          { x: new Date("2018-12-01"), y: 30 },
          { x: new Date("2019-01-01"), y: 74 },
          { x: new Date("2019-02-01"), y: 70 },
          { x: new Date("2019-03-01"), y: 50 },
          { x: new Date("2019-04-01"), y: 15 },
          { x: new Date("2019-05-01"), y: 78 },
          { x: new Date("2019-06-01"), y: 78 },
          { x: new Date("2019-07-01"), y: 54 },
          { x: new Date("2019-08-01"), y: 85 },
          { x: new Date("2019-09-01"), y: 95 },
          { x: new Date("2019-10-01"), y: 61 },
          { x: new Date("2019-11-01"), y: 85 },
          { x: new Date("2019-12-01"), y: 60 }
          ]
         }
          ]
        }],
        navigator: {
          slider: {
            minimum: new Date("2018-07-01"),
            maximum: new Date("2019-06-30")
          }
        }
      };
      const containerProps = {
        width: "80%",
        height: "450px",
        margin: "auto"
      };
      return (
        <div className="col-12">
          <div className="card card2">
            <div className="card__body">
              <CanvasJSStockChart
                options={options}
                containerProps = {containerProps}
                onRef={ref => this.stockChart = ref}
              />
            </div>
          </div>
        </div>
      );
    }
  }
export default Products
