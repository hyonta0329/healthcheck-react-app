//https://teratail.com/questions/122179

import React from "react";
import ListTable from "./list/listtable"
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import * as Actions from "../actions/Actions";
import healthStore from "../stores/Stores"; 

export default class List extends React.Component {
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
      tickets: []
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
    const token = this.state.token;
    const username = this.state.username;
    return (
      <div>
      <div>
      </div>
      <ul class="grid-container">
      <li class="grid-box box-big">
      <div class="rounded border border-info" id="homeobject">
        <h4 class="text-light bg-dark">&nbsp;これまでのおねつ</h4>
        <br />
        <table><tbody><td></td><td><input class="btn btn-lg btn btn-pale btn-block" type="button" value="リストを更新する" onClick={this.reloadTickets.bind(this, token, username)} /></td><td>-</td></tbody></table>
        <br />
        <ListTable items={this.state.items} total={this.state.total} tickets={this.state.tickets} username={username}/>
      </div>
      </li>
      </ul>
      </div>
    );
  }
}
