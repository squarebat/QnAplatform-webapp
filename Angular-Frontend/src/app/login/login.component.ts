import { LoginAuthenticateService } from './../services/login-authenticate/login-authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.html']
})
export class LoginComponent implements OnInit {
  public regMessage;
  public authMessage;
  public redirectRoute;
  constructor(private logAuthService: LoginAuthenticateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.regMessage = params.message;
        console.log(this.regMessage);
      }
    )
  }

  authenticateUser(email: string, password: string) {
    this.logAuthService.getUsers(email, password).subscribe((users: any) => {
      var authSuccess = false;
      var index;
      for (var i = 0; i<users.length; i++) {
        console.log(users[i]);
        if (users[i].email == email && users[i].password == password) {
          index=i;
          authSuccess=true;
        }
      }
      if (!authSuccess)
      {
        this.router.navigate(['/login', { message: 'Invalid username or password' }]);
      }
      else
      {
        this.router.navigate(['/home',users[index].username]);
      }
    });
  }

}
