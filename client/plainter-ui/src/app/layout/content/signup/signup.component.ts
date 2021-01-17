import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signOne: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  signOnePass() {
    this.signOne = false;
  }

}
