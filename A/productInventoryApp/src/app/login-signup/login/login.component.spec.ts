import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockAuthService {
  mockUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(
    [
      {
        id:1,
        password: "qazwsx",
        emailId: "ambarsariya@wipro",
        firstName: "R",
        lastName: "K",
        mobileNumber: 909090,
        location: "Amritsar"
      },
      {
        id:2,
        password: "qazwsx",
        emailId: "ambar@wipro",
        firstName: "A",
        lastName: "K",
        mobileNumber: 909,
        location: "Gurugram" 
      }
    ]
  );

  getAllUsers(): BehaviorSubject<User[]> {
    return this.mockUsers;
  }

  addUser(newuser: User) {
    let tempMockUsers = this.mockUsers.getValue();
    tempMockUsers.push(newuser);
    this.mockUsers.next(tempMockUsers);
  }
}

describe('LoginComponent', () => {
 describe("Login component CLASS", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    }).compileComponents();

    authService = TestBed.get(AuthService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 });

 describe("Login component DOM", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    }).compileComponents();

    authService = TestBed.get(AuthService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it("check email input", () => {
     const debugElem: DebugElement = fixture.debugElement.query(By.css("input[type='email']"));
     expect(debugElem).toBeTruthy();
   });

   it("check password input", () => {
    const debugElem: DebugElement = fixture.debugElement.query(By.css("input[type='password']"));
    expect(debugElem).toBeTruthy();
   });

   it("check submit button", () => {
    const debugElem: DebugElement = fixture.debugElement.query(By.css("button[type='submit']"));
    expect(debugElem).toBeTruthy();
   });

   it("check signup link", () => {
     const debugElem: DebugElement = fixture.debugElement.queryAll(By.css("a"))[0];
     expect(debugElem).toBeTruthy();
   });
 });
});
