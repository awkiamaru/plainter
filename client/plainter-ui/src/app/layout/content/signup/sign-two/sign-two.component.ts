import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-two',
  templateUrl: './sign-two.component.html',
  styleUrls: ['./sign-two.component.css']
})
export class SignTwoComponent implements OnInit {

  constructor() { }
  signupThree: boolean = true;

  ngOnInit(): void {
  }
  
  signupThreePass() {
    this.signupThree = false;
  }
}
