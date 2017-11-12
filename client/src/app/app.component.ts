import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: string = 'login';
  messages: {success: boolean, msg: string}[] = [];

  constructor() {}

  ngOnInit() {
  }

  toggleForms(event: string) {
    this.form = event;
  } 

  onNewMessage(event: {success: boolean, msg: string}) {
    this.messages.push(event);
  }

  getMessages() {
    return this.messages;
  }

  clearMessages(event) {
    console.log(event);
    this.messages = [];
  }



}
