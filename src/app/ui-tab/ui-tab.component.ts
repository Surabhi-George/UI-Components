import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-tab',
  templateUrl: './ui-tab.component.html',
  styleUrls: ['./ui-tab.component.css']
})
export class UiTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabs = [
      {
          name: 'Tab 1',
          data: 'Tab content 1'
      },
      {
          name: 'Tab 2',
          data: 'Tab content 2 updated'
      },
      {
          name: 'Tab 3',
          data: 'Tab content 3'
      }
  ]

  // click
  view_tab = 'tab_0';
  changeTab = function(tab){
    this.view_tab = tab;
  }

}
