import React from "react";
import $ from "jquery";
import healthStore from "../../stores/Stores"; 
import * as Actions from "../../actions/Actions";


export default class ListTable extends React.Component {
  deleteissue(token, id, username){
        if(window.confirm('Are you sure to delete this task?')){
        $.ajax( {
          contentType: "application/json",
          type: 'POST',
          url: "https://hmml9crysl.execute-api.us-east-2.amazonaws.com/prod/update-delete-mobtask",
          processdata: false,
          dataType: 'json',
          data: JSON.stringify({
            'TaskID' : id,
            'OperationType': 'delete'
          }),
        headers: {
            'Authorization': token, 
        },
        success: function(data){
            //console.log(data);
            Actions.reloadTickets(token, username);
            },
        error: function(data){
            console.log('error', data);
            }                
        })
        }else{
        window.alert('cancelled');
        }  
    }

    dummydelete(token, id){
        console.log('dummy - token is '+token);
        console.log('dummy - deletedissueid is '+id);
    }

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
    return (
    	<div>
    	<table class="table" id="table1">
    	<thead><tr><th>いつはかった</th><th>おねつ</th><th>こめんと</th><th>操作</th></tr></thead>
    	<tbody id="healthtable">
    	{this.props.tickets.map((tickets, i) => 
    		{
    			return (
    				<tr><td>{tickets.Created}</td><td>{tickets.title}</td><td>{tickets.Comment}</td><td><input type="button" class="btn btn btn-pale" id={tickets.TaskID} value="-" onClick={this.deleteissue.bind(this, token, tickets.TaskID, this.props.username)} /></td></tr>
    				)
    		})}
    	</tbody>
    	</table>
    	</div>
    );
  }
}

