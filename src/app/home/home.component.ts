import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/service/giphy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public randomGif: any;

  constructor(
    public giphyService: GiphyService,
    public router: Router
  ) {}

}
