import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-four',
  templateUrl: './signup-four.component.html',
  styleUrls: ['./signup-four.component.css']
})
export class SignupFourComponent implements OnInit {

  constructor() { }

  signupFive: boolean = true;

  ngOnInit(): void {
  }

  signupFivePass() {
    this.signupFive = false;
  }
}
