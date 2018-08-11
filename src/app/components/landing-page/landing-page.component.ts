import { Utility } from './../../utility/Utility';
import { Component, OnInit } from '@angular/core';
import { headings, games, infoType, messages } from './../../config/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  public headingsConst = headings;
  public gamesConst = games;

  ngOnInit() {
  }

}
