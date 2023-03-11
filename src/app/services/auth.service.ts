import { Iuser } from './../model/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  constructor() {}

  currentuser: (Iuser | null)=null;
  login(username: string, password: string)
  {
    this.currentuser= {
      user: username,
      password: password,
    }
  }
  islogin(): boolean {
    if (this.currentuser?.user && this.currentuser?.password) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    this.currentuser = null;
  }
}
