import { WebRequestService } from './../web-request/web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private wrs: WebRequestService) { }
  createUser(username: string, email: string, password: string){
    console.log("reached to createUser() in registerService");

    return this.wrs.post('users', { 
      username,
      email,
      password
    });
  }
  
}
