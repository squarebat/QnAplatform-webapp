import { RegisterService } from './../services/register/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService : RegisterService, ) {

  }

  ngOnInit(): void {
  }

  createNewUser(username:string, email:string, password:string) {
    
    this.registerService.createUser(username,email,password).subscribe((response: any) => {
      console.log(response);
      
      //navigate to login page with message registered successfully
    });
  }

}
