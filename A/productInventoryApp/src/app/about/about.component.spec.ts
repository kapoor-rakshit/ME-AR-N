import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  describe("About component CLASS", () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ AboutComponent ],
        imports: [RouterTestingModule, FormsModule]
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AboutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    
  });

  describe("About component DOM", () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ AboutComponent ],
        imports: [RouterTestingModule, FormsModule]
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AboutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("check app tagline", () => {
      const debugElem: DebugElement = fixture.debugElement.queryAll(By.css("h2"))[0];
      const htmlElem: HTMLElement = debugElem.nativeElement;
      expect(htmlElem.textContent).toEqual("A better way to work", `tagline of app`);
    });

    it("check user reviews heading", () => {
      const debugElem: DebugElement = fixture.debugElement.queryAll(By.css(".header b"))[0];
      const htmlElem: HTMLElement = debugElem.nativeElement;
      expect(htmlElem.textContent).toEqual("What our customers say ...", `heading of user review`);
    });
    
  });
});
