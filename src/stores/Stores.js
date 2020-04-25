import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class HealthStore extends EventEmitter {
  constructor() {
    super();
    this.token = "This is old token";
    this.username = "no username";
    //20200423
    this.tickets = [{title: "-", Created: "---", Comment: "---"}];
    //20200424
    this.LatestTicket = [];
  }

  //unused-functions
  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false
    });

    this.emit("change");
  }

  receiveToken(token, username) {
    this.token = token;
    this.username = username;
    this.emit("change");
  }
  //20200423
  receiveTickets(tickets){
    this.tickets = tickets;
    this.emit("change");
  }
  //20200424
  receiveLatestTicket(tickets){
    this.LatestTicket = tickets[0];
    this.emit("change");
  }

  getAll() {
    return {
      "token" : this.token,
      "username" : this.username
    };
  }
  //20200423
  getAllWithTickets(){
    return {
      "token":this.token,
      "username":this.username,
      "tickets":this.tickets
    }
  }
  //20200424
  getLatestTicket(){
    return {
      "LatestTicket":this.LatestTicket
    }
  }

  //used-functions
  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      case "RECEIVE_TOKEN": {
        this.receiveToken(action.token, action.username);
        //console.log(action.token);
      }
      //20200423
      case "GET_TICKETS" : {
        this.receiveTickets(action.tickets);
        //console.log(action.tickets);
      }
      //20200424
      case "PUT_TICKET" : {
        //現時点では何もしないが、PUT_TICKET後にtodayの欄を更新した方がいいのかもしれない
        //20200425
        this.receiveTickets(action.tickets);
        //console.log(action.tickets);
      }
    }
  }
}

const healthStore = new HealthStore;
dispatcher.register(healthStore.handleActions.bind(healthStore));
window.dispatcher = dispatcher;
export default healthStore;