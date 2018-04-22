import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  username: String;
  constructor() { }

  setValue(value) {
    this.username = value;
  }
  getUsername() {
    console.log('Called');
    return this.username;
  }
}
