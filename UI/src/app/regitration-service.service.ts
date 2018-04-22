import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/observable';
import { Reguser } from './register-template';
import { HeaderService } from './header.service';



@Injectable()
export class RegitrationServiceService {

  username: String;
  constructor(private http: HttpClient, private header: HeaderService) { }
  url =  'http://localhost:8000/api/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  registrationPost(username) {
    console.log(username);
    return this.http.post(this.url, username, this.httpOptions);
  }

  setValue(value) {
    this.header.setValue(value);
  }
}
