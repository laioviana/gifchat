import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/model/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages : Message[] = [];
  constructor() {}

  ngOnInit() {
    this.addReceivedMsg();
    this.addHelloGif();
    this.addReceivedMsg();
  }

  sendMsg($event) {
    this.messages.push($event);
  }

  addReceivedMsg(){
    const receivedText = new Message();
    receivedText.content = "This is a premade, hardcoded received Text";
    receivedText.botMsg = true;
    receivedText.gif = false;
    this.messages.push(receivedText);
  }

  addHelloGif(){
    const receivedText = new Message();
    receivedText.content = "https://media1.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif?cid=206b9930jh31ucxx3cm3eyta0lrxwppremssd7qh1n3y8vy8&rid=giphy.gif";
    receivedText.botMsg = false;
    receivedText.gif = true;
    this.messages.push(receivedText);
  }

}
