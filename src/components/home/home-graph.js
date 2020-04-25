import React from "react";
import {Line} from 'react-chartjs-2';
import healthStore from "../../stores/Stores"; 

//パースの練習
const sampledate = '2020-01-25 15:20:55';
const sampledateobject = Date.parse(sampledate);
console.log(sampledateobject);
const sampletemp ='37.7';
const sampletempobject = parseFloat(sampletemp);
console.log(sampletempobject);

export default class HomeGraph extends React.Component {
  constructor(){
    super();
    this.getToken = this.getToken.bind(this);
    this.state = {
      total: 5, 
      items:[
        {id: 0, created: "-", temp: "-", comment: "-"}
      ],
      token: healthStore.getAll()["token"],
      username: healthStore.getAll()["username"],
      tickets: [],
      LatestTicket: []
    }
  }
  componentDidMount() {
    healthStore.on("change", this.getToken);
    console.log("count", healthStore.listenerCount("change"));
  }

  componentWillUnmount() {
    healthStore.removeListener("change", this.getToken);
  }

  getToken() {
    this.setState({
      token: healthStore.getAll()["token"],
      username: healthStore.getAll()["username"],
      tickets: healthStore.getAllWithTickets()["tickets"],
      LatestTicket: healthStore.getLatestTicket()["LatestTicket"]
    });
  }

  render() {
    const datatickets = this.state.tickets;
    const adjusteddatatickets = []
    for (const i in datatickets){
          //console.log(i);
          //console.log(datatickets[i].title);
          //console.log(datatickets[i].Created);
          //console.log('----');
          const temp = parseFloat(datatickets[i].title);
          const datetime = Date.parse(datatickets[i].Created);
          adjusteddatatickets.push({x: datetime, y: temp});
        }
    const graphdata = {
      labels: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05'],
      datasets: [
        {
          label: 'おねつ',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'round',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'square',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#eee',
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: adjusteddatatickets
        }
      ]
    };
    const graphoptions = {
          title:{
              display:true,
              text:"おねつグラフ"
          },
          scales: {
              xAxes: [{
                  type: "time",
                  time: {
                      format: "YYYY-MM",
                      unit: "week",
                      displayFormats: {
                          month: 'YYYY-MM'
                      },
                      tooltipFormat: 'll'
                  },
                  scaleLabel: {
                      display: true,
                      labelString: 'Date'
                  }
              }, ],
              yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'points'
                  },
                  ticks: {
                      beginAtZero: true,
                      min: 36.0,
                      max: 38.5
                  }
              }]
          },
      };

    //console.log(adjusteddatatickets); 
    return (
      <div class="rounded border border-info">
        <h4 class="text-light bg-dark">&nbsp;おねつグラフ</h4>
        <Line data={graphdata} options={graphoptions} />
      </div>
    );
  }
}
