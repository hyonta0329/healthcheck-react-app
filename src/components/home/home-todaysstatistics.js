import React from "react";

//20200425
import * as Actions from "../../actions/Actions";
import healthStore from "../../stores/Stores";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import List from '../../components/list';

export default class HomeTodaysStatistics extends React.Component {
  
  //20200425
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
      tickets: [{title: "-", Created: "---", Comment: "---"}]
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
      tickets: healthStore.getAllWithTickets()["tickets"]
    });
  }

  getTickets() {
    this.setState({
      token: healthStore.getAll()["token"],
      username: healthStore.getAll()["username"],
      tickets: healthStore.getAllWithTickets()["tickets"]
    });
  }

  reloadToken(newToken, newusername) {
    Actions.reloadToken(newToken, newusername);
  }

  reloadTickets(newToken, newusername) {
    Actions.reloadTickets(newToken, newusername);
    //console.log(this.state.tickets);
  }

  render() {
    const titlestyle = {color:'#663300'};
    const linkstyle = {style:"text-align:center;"};
    var todayscount = 0;
    var todaystickets = [];
    var latestcreated = "";
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    //console.log(month.toString());
    //var createdtime = date.getHours() + ':' + date.getMinutes();
    //console.log(createdtime)
    if (month.toString().length === 1){
      month = '0' + month;
      //console.log('plus zero');
    }else{
      //console.log('zero');
    }
    var day = date.getDate();
    var currentdate = year + '-' + month + '-' + day;
    //console.log(currentdate.toString());



    //20200425
    var latestTicket = {title: "-", Created: "---", Comment: "---"};
    if(typeof this.state.tickets !== "undefined"){
      latestTicket = this.state.tickets[0];
      latestcreated = latestTicket.Created.substr(0, 10);
      todaystickets = this.state.tickets.filter(ticket => ticket.Created.indexOf(currentdate) != -1);
      todayscount = todaystickets.length;
    }
    //console.log(latestTicket);
    //prep: {latestTicket.title}, {latestTicket.title}, {this.props.todayscount}

    return (
      <div class="homeobject">
      <div class="rounded border border-info" id="homeobject">
        <h4 class="text-light bg-dark">&nbsp;さいきんのおねつ</h4>
        <table class="table">
          <tr><td>直近のおねつ: </td><td>{latestTicket.title}</td></tr>
          <tr><td>いつはかった: </td><td>{latestTicket.Created}</td></tr>
          <tr><td>きょう何回はかった: </td><td>{todayscount}</td></tr>
        </table>
        <Link to='/list'>&nbsp;&nbsp;&nbsp;>>>>すべてのおねつを見る</Link>
        <Route path='/list' component={List} />
      </div>
      </div>
    );
  }
}
