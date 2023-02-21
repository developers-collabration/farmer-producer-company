import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public display: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }

  isActive() {
    if (this.hide == true)
       this.display = false;
       this.hide = true;
       console.log(this.hide);
  }
  inActive() {
    console.log(this.display)
    if (this.display == false)
     this.hide = false;
     this.display = true;
     this.hide !=this.display
  }

}
