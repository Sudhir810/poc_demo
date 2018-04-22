import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegitrationServiceService } from '../regitration-service.service';
import { Reguser } from '../register-template';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { log } from 'util';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public completeMessage: any;
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  username: String = '';
  fullname: String = '';
  password: any;
  titleAlert: String = 'This field is required!';
  public data = [];
  public message: any;
  public success: boolean;
  public show: any;
  public value: any;

  constructor(private fb: FormBuilder, private regService: RegitrationServiceService, private router: Router) {

    this.rForm = fb.group({
      'fullname': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'validate' : ''
    });

  }

  ngOnInit() {
  }

  addPost(post) {
    this.username = post.username;
    this.fullname = post.fullname;
    this.password = post.password;
    localStorage.username = this.username;
    this.show = this.regService.registrationPost(post).subscribe( res => { this.message = JSON.stringify(res); this.abc(this.message); } );
  }
  abc(value) {
    this.message = JSON.parse(value);
    this.completeMessage = this.message.message;
    this.success = this.message.success;
    this.checkSuccess(this.success);
  }



  checkSuccess(value) {
    if (value === true) {
      //this.regService.setValue(this.username);
      this.router.navigateByUrl('/user');
    }
  }
}
