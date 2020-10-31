import { WebRequestService } from './../web-request/web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticateService {

  constructor(private wrs: WebRequestService) {
    
  }
  getUsers(email: string, password: string){
    console.log("reached to getUsers()");
    
    return this.wrs.get('users');
  }

}
