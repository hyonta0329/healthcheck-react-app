import React from "react";
import HomeLoginBar from "./home/home-loginbar";
import HomeInput from "./home/home-input";
import HomeTodaysStatistics from "./home/home-todaysstatistics";
import HomeGraph from "./home/home-graph";
import List from "./list";


export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {username: "", temp: "-", time: "???", password: "", token: "no token", todayscount: 0};
  }
  
  changeUsername(username) {
    this.setState({username});
  }
  changePassword(password){
    this.setState({password});
  }
  changeToken(token){
    this.setState({token});
  }
  changeTemp(temp) {
    this.setState({temp});
  }
  changeTime(time){
    this.setState({time});
  }

  render() {
    const titlestyle = {color:'#663300'};
    const liststyle = {display:'none'};
    return (
      <div>
        <HomeLoginBar changeUsername={this.changeUsername.bind(this)} changePassword={this.changePassword.bind(this)} changeToken={this.changeToken.bind(this)} username={this.state.username} password={this.state.password} token={this.state.token} />
        <br />
        <br />
        <ul class="grid-container">
          <li class="grid-box"><HomeInput changeTemp={this.changeTemp.bind(this)} changeTime={this.changeTime.bind(this)} temp={this.state.temp} /></li>
          <li class="grid-box"><HomeTodaysStatistics latesttemp={this.state.temp} latesttime={this.state.time} todayscount={this.state.todayscount} /></li><br />
          <li class="grid-box box-big"><HomeGraph /></li>
        </ul>
      </div>
    );
  }
}
