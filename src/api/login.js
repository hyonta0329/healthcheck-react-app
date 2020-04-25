import AWS from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';
import React from 'react';

const userPool = new CognitoUserPool({
    UserPoolId: 'us-east-2_J3czsOpsv',
    ClientId: '3atuib3usf88b9cd72qbs1jvod'
})

var authtoken = '';


export function SignIn(usr, pas){

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
            return authresult.getIdToken().getJwtToken();
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