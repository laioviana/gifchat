import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '././material/material.module';
import { GiphyService } from 'src/service/giphy.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { MessageSenderComponent } from './message-sender/message-sender.component';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DialogGifComponent } from './dialog-gif/dialog-gif.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    MessageSenderComponent,
    DialogGifComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'chat', component: ChatComponent},
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule 
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogGifComponent
  ]
})
export class AppModule { }
