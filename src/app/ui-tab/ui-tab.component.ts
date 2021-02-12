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
          data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
      },
      {
          name: 'Tab 2',
          data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
      },
      {
          name: 'Tab 3',
          data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
      }
  ]

  // click
  view_tab = 'tab_0';
  changeTab = function(tab){
    this.view_tab = tab;
  }

}
