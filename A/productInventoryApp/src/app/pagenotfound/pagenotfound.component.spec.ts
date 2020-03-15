import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundComponent } from './pagenotfound.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PageNotFoundComponent', () => {
  describe("PageNotFound component CLASS", () => {
    let component: PagenotfoundComponent;
    let fixture: ComponentFixture<PagenotfoundComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ PagenotfoundComponent ],
        imports: [RouterTestingModule, FormsModule]
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(PagenotfoundComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    
  });

  describe("PageNotFound component DOM", () => {
    let component: PagenotfoundComponent;
    let fixture: ComponentFixture<PagenotfoundComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ PagenotfoundComponent ],
        imports: [RouterTestingModule, FormsModule]
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(PagenotfoundComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("check error code", () => {
      const debugElem: DebugElement = fixture.debugElement.queryAll(By.css("h1"))[0];
      const htmlElem: HTMLElement = debugElem.nativeElement;
      expect(htmlElem.textContent).toEqual("404", `error code of not found`);
    });

    it("check error message", () => {
      const debugElem: DebugElement = fixture.debugElement.queryAll(By.css("h3"))[0];
      const htmlElem: HTMLElement = debugElem.nativeElement;
      expect(htmlElem.textContent).toEqual("This is not the web page you are looking for.", `error message`);
    });
    
  });
});
