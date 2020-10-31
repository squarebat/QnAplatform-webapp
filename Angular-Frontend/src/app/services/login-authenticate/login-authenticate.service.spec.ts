import { TestBed } from '@angular/core/testing';

import { LoginAuthenticateService } from './login-authenticate.service';

describe('LoginAuthenticateService', () => {
  let service: LoginAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
