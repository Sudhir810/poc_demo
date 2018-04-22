import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: String;
  constructor(private header: HeaderService) { }


  ngOnInit() {
    this.username = this.header.getUsername();
  }

}
