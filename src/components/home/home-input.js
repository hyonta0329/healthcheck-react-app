import React from "react";
import * as Actions from "../../actions/Actions";
import healthStore from "../../stores/Stores"; 

export default class HomeInput extends React.Component {
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
  putTicket(username, token) {
    var int = document.getElementById("int");
    var float = document.getElementById("float");
    var temp = int.value + "." + float.value;
    var comment = document.getElementById("comment_ticket").value;
    Actions.putTicket(temp, comment, username, token);
    //console.log(this.state.tickets);
  }


  handleChange(e) {
    const int = document.getElementById("int");
    const float = document.getElementById("float");
    const temp = int.value + "." +float.value;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var months = "";
    console.log(month);
    var minut = date.getMinutes();
    var minutes = "";
    if (minut < 10){
      minutes = minutes + "0" + minut.toString();
    }else{
      minutes = minutes + minut.toString();
    }
    var createdtime = date.getHours() + ':' + date.getMinutes();
    console.log(createdtime)
    if (month < 10){
      months = "0" + month.toString();
      //console.log(month);
    }else{
      //console.log('zero');
    }
    var day = date.getDate();
    var created = year + '/' + month + '/' + day + ' ' + createdtime;
    this.props.changeTemp(temp);
    this.props.changeTime(created);
  }

  render() {
    const titlestyle = {color:'#663300'};
    const token = this.state.token;
    const username = this.state.username;
    return (
      <div class="homeobject">
      <div class="rounded border border-info" id="homeobject">
        <h4 class="text-light bg-dark">&nbsp;おねつをはかる</h4>
          <table class="table">
            <tr><td>おねつ: </td><td>
              <select name="int" id="int">
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
              </select> . 
              <select name="float" id="float">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </td></tr>
            <tr><td>こめんと: </td><td><input type="text" id="comment_ticket" /></td></tr>
            <tr><td></td><td></td><input class="btn btn btn-pale" type="button" value = "OK" onClick={this.putTicket.bind(this, username, token)} /></tr>
          </table>
      </div>
      </div>
    );
  }
}
