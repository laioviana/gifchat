import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GiphyService } from 'src/service/giphy.service';
import { Message } from 'src/model/message.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-gif',
  templateUrl: './dialog-gif.component.html',
  styleUrls: ['./dialog-gif.component.css']
})
export class DialogGifComponent implements OnInit {

  gifs: any[];
  search = "";

  constructor(public dialogRef: MatDialogRef<DialogGifComponent>,
              public giphyService: GiphyService) {}

  ngOnInit() {
    this.giphyService.getTrendingGif().subscribe((res) => {
      this.gifs = res.data.map(gif => gif.images.downsized.url);
    });
  }

  sendGif(url: string) {
    this.dialogRef.close(url);
  }

  searchGif() {
    if (this.search.length > 2) {
      this.giphyService.getGif(this.search).subscribe((res) => {
          this.gifs = res.data.map(gif => gif.images.original.url);
        });
    }
  }

  onDismiss(): void {
    this.dialogRef.close();
  }

}
