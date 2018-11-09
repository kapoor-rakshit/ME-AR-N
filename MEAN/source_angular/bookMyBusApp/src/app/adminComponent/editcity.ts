import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { CityService } from './city_service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './editcity.html',
    styleUrls: ['./adminComp.css']
  })

export class EditCity implements OnInit{

    id: any;
    city:any = {};

    constructor(private _cityService: CityService, private route: ActivatedRoute, private router: Router, private spinnerService: Ng4LoadingSpinnerService){
        this.route.params.forEach((params: Params) => {
            this.id = params['id'];                      // + signifies that it is a number, so removed
        });
        this.spinnerService.show();
        this._cityService.getCity(this.id).subscribe(     // pass values fetched from URL in subscribe()
            (resp:any) => {
                this.city = resp;
                this.spinnerService.hide();
            },
            err => console.log(err)
        );
    }

    ngOnInit(){
    }

    onSubmit(formValue: any){
        let updatedcity = {
              name: formValue.name,
              desc: formValue.desc
            };
    
            this.spinnerService.show();
         this._cityService.updateCity(updatedcity, this.id).subscribe(
           (data:any) => {
               this.spinnerService.hide();
               this.router.navigate(['adminconsole/cities']);
           },
           err => console.log(err)
         );
      }
}