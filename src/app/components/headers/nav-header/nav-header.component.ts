import { headings, navbarLabels } from './../../../config/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor() { }

  public headingsConst = headings;
  public navbarLabelsConst = navbarLabels;

  ngOnInit() {
    // const elems = document.querySelectorAll('.dropdown-trigger');
    // const instances = M.Dropdown.init(elems);
  }

}
