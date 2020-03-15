import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';
import { AuthService } from '../auth.service';

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


describe('SignupComponent', () => {
  describe("Signup component CLASS", () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let authService: AuthService;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    }).compileComponents();

    authService = TestBed.get(AuthService);
    }));

    beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

});

  describe("Signup component DOM", () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let authService: AuthService;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    }).compileComponents();

    authService = TestBed.get(AuthService);
    }));

    beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
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

    it("check number input", () => {
      const debugElem: DebugElement = fixture.debugElement.query(By.css("input[type='number']"));
      expect(debugElem).toBeTruthy();
    });

    it("check submit button", () => {
      const debugElem: DebugElement = fixture.debugElement.query(By.css("button[type='submit']"));
      expect(debugElem).toBeTruthy();
    });

    it("check login link", () => {
      const debugElem: DebugElement = fixture.debugElement.query(By.css("a"));
      expect(debugElem).toBeTruthy();
    });

  });
});
