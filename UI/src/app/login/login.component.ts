import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  username: String = '';
  // name: String = '';
  password: any;
  titleAlert: String = 'This field is required!';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      // 'name': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      // 'validate' : ''
    });

  }

  ngOnInit() {
  }

  addPost(post) {
    this.username = post.username;
    // this.name = post.name;
  }

}
