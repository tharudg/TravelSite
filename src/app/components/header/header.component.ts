import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchBoxHide: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  seachBoxShowButton () {
    this.isSearchBoxHide = !this.isSearchBoxHide;
  }
}
