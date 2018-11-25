import { Component } from "@angular/core";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl : './homeComp.html',
    })

    export class HomeComponent{

        constructor(private spinnerServive: Ng4LoadingSpinnerService){
            
        }

    }