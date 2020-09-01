import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GiphyService } from 'src/service/giphy.service';
import { Message } from 'src/model/message.model';
import { DialogGifComponent } from '../dialog-gif/dialog-gif.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {
  msg: string;
  @Output() sendMsgEvent = new EventEmitter<Message>();

  constructor(public dialog: MatDialog) {}

  sendMsg(msg: string){
    const message = new Message();
    message.content = msg;
    message.botMsg = false;
    message.gif = false;
    this.sendMsgEvent.emit(message);
    this.msg = '';
  }

  sendMsgGif(msg: string){
    const message = new Message();
    message.content = msg;
    message.botMsg = false;
    message.gif = true;
    this.sendMsgEvent.emit(message);
  }

  openGifDialog(){
    const dialogRef = this.dialog.open(DialogGifComponent, {
      minWidth: "700px"
    });
  
    dialogRef.afterClosed().subscribe(gif => {
      if (gif) {
        this.sendMsgGif(gif);
      }
    });
  }

}
