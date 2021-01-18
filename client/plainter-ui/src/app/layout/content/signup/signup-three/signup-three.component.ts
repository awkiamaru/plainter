import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-three',
  templateUrl: './signup-three.component.html',
  styleUrls: ['./signup-three.component.css']
})
export class SignupThreeComponent implements OnInit {

  constructor() { }

  signupFour: boolean = true;

  ngOnInit(): void {
  }

  signupFourPass() {
    this.signupFour = false;
  }
}
