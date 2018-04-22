import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openText(this) {
    const item = document.getElementById('change');
    const newEl = document.createElement('p');
    newEl.innerHTML = '<b>Hello this is an image!</b>';
    item.parentNode.replaceChild(newEl, item);
  }

}
