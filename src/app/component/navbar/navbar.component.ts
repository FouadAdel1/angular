import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private auth: AuthService) {
    console.log(auth.currentuser?.user);
   }
  get getusername() {
     console.log(this.auth.currentuser?.user);
    return this.auth.currentuser?.user;
  }
   get isloggedin() {
    return this.auth.islogin();
   }
  logout() {
    this.auth.logout();
  }

}
