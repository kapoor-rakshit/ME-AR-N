import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from './user';

describe('AuthService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    authService = TestBed.get(AuthService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
 });

 it('should be created', () => {
   const service: AuthService = TestBed.get(AuthService);
   expect(service).toBeTruthy();
 });

 describe("GET REQUEST", () => {
   let expectedUsers: User[];
   beforeEach(() => {
     expectedUsers = [
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
    ];
   });

   it("get all users", () => {
    authService.getAllUsers().subscribe(
       (users: User[]) => {
         expect(users).toEqual(expectedUsers, `array of all users`);
         expect(users.length).toEqual(2);
       },
       fail
    );
    const req = httpTestingController.expectOne(authService._usersUrl);
    expect(req.request.method).toEqual("GET", `should have been a GET request`);

    req.flush(expectedUsers);
   });
 });

 describe("POST REQUEST", () => {
   it("create new user", () => {
     let userToAdd:User = {id: 1, emailId: "kapoor@kapoor", password: "qwerty", firstName: "AK", lastName: "K", location: "Ambarsar", mobileNumber: 9087};
     let expectedUserToAdd:User = {id: 1, emailId: "kapoor@kapoor", password: "qwerty", firstName: "AK", lastName: "K", location: "Ambarsar", mobileNumber: 9087};

     authService.addUser(userToAdd).subscribe(
       (user: User) => {
         expect(user).toEqual(expectedUserToAdd);
       },
       fail
     );
     const req = httpTestingController.expectOne(authService._usersUrl);
     expect(req.request.method).toEqual("POST", "should have been a POST request");
     expect(req.request.body).toEqual(userToAdd, `should have added ${JSON.stringify(userToAdd)}`);

     const expectedResponse = new HttpResponse({ status: 200, statusText: 'OK', body: userToAdd });
     req.event(expectedResponse);
   });
 });

});
