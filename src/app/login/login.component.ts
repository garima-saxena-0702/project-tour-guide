import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  validate() {
    const userName = (<HTMLInputElement>document.getElementById('userName')).value;
    console.log(userName);
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(password);
    
  }

}
