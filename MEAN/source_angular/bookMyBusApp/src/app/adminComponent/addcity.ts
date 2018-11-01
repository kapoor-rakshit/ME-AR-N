import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from './city_service';

@Component({
    templateUrl: './addcity.html',
    styleUrls: ['./adminComp.css']
  })

export class AddCity implements OnInit{

    constructor(private _cityService: CityService, private router: Router){}

    ngOnInit(){
    }

    onSubmit(formValue: any){
        
        let newCity = {
              name: formValue.name,
              desc: formValue.desc
            };

        this._cityService.addCity(newCity).subscribe(
          (data:any) => this.router.navigate(["/adminconsole/cities/"]),
          err => console.log(err)
        );
      }

}