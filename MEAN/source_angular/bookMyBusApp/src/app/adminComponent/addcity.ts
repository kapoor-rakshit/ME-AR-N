import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from './city_service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './addcity.html',
    styleUrls: ['./adminComp.css']
  })

export class AddCity implements OnInit{

    name: String;
    desc: String;

    constructor(private _cityService: CityService, private router: Router, private spinnerService: Ng4LoadingSpinnerService){}

    ngOnInit(){
    }

    onSubmit(formValue: any){
        
        let newCity = {
              name: formValue.name,
              desc: formValue.desc
            };

        this.spinnerService.show();
        this._cityService.addCity(newCity).subscribe(
          (data:any) => {
            this.spinnerService.hide();
            this.router.navigate(["/adminconsole/cities/"]);
          },
          err => console.log(err)
        );
      }

}