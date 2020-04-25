import React from "react";
//import {SignIn} from "../../api/login.js";
import AWS from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';

import * as Actions from "../../actions/Actions";
import healthStore from "../../stores/Stores";

//AWS Credentials Initialization
const userPool = new CognitoUserPool({
    UserPoolId: 'us-east-2_J3czsOpsv',
    ClientId: '3atuib3usf88b9cd72qbs1jvod'
})

var authtoken = '';

//AWS Sign-In Function
function SignIn(usr, pas){

    const authenticationDetails = new AuthenticationDetails({
        Username : usr,
        Password : pas
    })
    const cognitoUser = new CognitoUser({
        Username : usr,
        Pool : userPool
    })
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (authresult) {
            authtoken = authresult.getIdToken().getJwtToken();
            window.alert('ログインしました')
            //var url = "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+usr;
            //console.log(result);
            //authtoken = result;
            //alert('success');
            //20191014 ペイロード用にデータを入力。あとはこれを使ってPOSTするようAPI Gatewayをいじってバグ直しておしまい
            var currenttime = new Date();
            //console.log(result);
            //console.log(currenttime.toString());
            //authtoken = result;
        }, onFailure: (err) => {
            return(err);
            console.log(err);
        }
    })
}

//Component Class Description
export default class HomeLoginBar extends React.Component {
  constructor(){
    super();
    this.getToken = this.getToken.bind(this);
    this.state = {
      token: "this is old token",
      username: "this is old username"
    };
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
      username: healthStore.getAll()["username"]
    });
  }

  reloadToken(newToken, newusername) {
    Actions.reloadToken(newToken, newusername);
  }
  //20200425
  reloadTickets(newToken, newusername) {
    Actions.reloadTickets(newToken, newusername);
    //console.log(this.state.tickets);
  }


  handleChangeUsername(e) {
    const username = e.target.value;
    this.props.changeUsername(username);
  }
  handleChangePassword(e) {
    const password = e.target.value;
    this.props.changePassword(password);
  }
  handleChangeToken(e) {
    const token = "new token";
    this.props.changeToken(token);
  }
  handleLogin(e){
    const usr = this.props.username;
    const pas = this.props.password;
    const signin = SignIn(usr, pas);
    setTimeout(()=>{
          this.props.changeToken(authtoken);
          this.setState({token:authtoken, username:usr});
          this.reloadToken(authtoken, usr);
          this.reloadTickets(authtoken, usr);
    }, 3000)
  }

  render() {
    const titlestyle = {color:'#663300'};
    const token = this.state.token;
    const username = this.state.username;
    //console.log(this.props);
    //削除した：<input class="btn btn-lg btn btn-pale btn-block" type="button" value="UpdateToken" onClick={this.reloadToken.bind(this, token, username)} />
    return (
      <div>
        <div class = "container">
          <div class="wrapper">
            <h2 class="form-signin-heading" style={titlestyle}>こんにちは！！！</h2>
            <hr class="colorgraph" />
            <input class="form-control" placeholder="Email" value={this.props.username} onChange={this.handleChangeUsername.bind(this)} />
            <input type="password" placeholder="Password" class="form-control" value={this.props.password} onChange={this.handleChangePassword.bind(this)} />
            <br />
            <input class="btn btn-lg btn btn-pale btn-block" type="button" value="ログインする" onClick={this.handleLogin.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
