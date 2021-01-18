import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.component.html',
  styleUrls: ['./signup-one.component.css']
})
export class SignupOneComponent implements OnInit {

  constructor() { }

  signTwo: boolean = true;

  ngOnInit(): void {
  }

  signTwoPass() {
    this.signTwo = false;
  }
}
