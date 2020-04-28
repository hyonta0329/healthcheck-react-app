import dispatcher from "../dispatcher";
import $ from "jquery";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}

function compare( a, b ){
 var r = 0;
  if( a.Created > b.Created ){ r = -1; }
  else if( a.Created < b.Created ){ r = 1; }
  return r;
  }

export function reloadTickets(token, username) {
  var url = "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+username;
  $.ajax({
            contentType: "application/json",
            type: 'GET',
            url: url,
            processdata: false,
            dataType: 'json',
            headers: {
                'Authorization': token, 
                },
            success: function(data){               
              //console.log(data['body']['Items'][0]['TaskID']);
              //console.log(data['body']['Items'][1]['TaskID']);
              var filterresults = '';
              filterresults = data['body']['Items'].filter(function(a){
                return a.timezone === 'health'
              });
              filterresults.sort(compare);
              //console.log(filterresults);
              //console.log(Object.keys(filterresults).length);
              if(filterresults.length === 0){
              dispatcher.dispatch({type: "GET_TICKETS",
                tickets : [{Created: "None", title: "None", Comment: "None", TaskID: "None"}]
              });                
              }else{
              dispatcher.dispatch({type: "GET_TICKETS",
                tickets : filterresults
              });
            }
              }
    })
}

export function putTicket(temp, comment, username, token){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var createdtime = date.getHours() + ':' + date.getMinutes();
  //console.log(createdtime)
  if (month.length === 1){
    month = '0' + month;
  }else{
    //console.log('zero');
  }
  var day = date.getDate();
  var created = year + '-' + month + '-' + day + '-' + createdtime;

  $.ajax( {
    contentType: "application/json",
    type: 'POST',
    url: "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+username,
    processdata: false,
    dataType: 'json',
    data: JSON.stringify({
      'created' : created,
      'username' : username,
      'title' : temp,
      'Issuetype' : 'health',
      'Status' : 'NS',
      'timezone' : 'health',
      'Due' : createdtime.toString(),
      'Comment' : comment,
      'EstTime' : 'None',
      'Priority' : 'None'
    }),
    headers: {
      'Authorization': token, 
    },
    success: function(data){
      //console.log(data);
      window.alert('おねつが正常に登録されました');
      reloadTickets(token, username);
    },
    error: function(data){
      console.log('error', data);
      }                
    })
}

export function reloadToken(newToken, newusername) {
  dispatcher.dispatch({type: "FETCH_TOKEN"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TOKEN", 
      token: newToken,
      username: newusername});
  }, 1000);
}