import { Component, OnInit, ElementRef } from '@angular/core';
import { CityService } from './city_service';
import { City } from './cityinterface';
import { ActivatedRoute, Params } from '@angular/router';
import {Chart} from 'chart.js';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './topCities.html',
    styleUrls: ['./adminComp.css']
  })

export class TopCities implements OnInit{

    cities: City[];
    chart: any;             // hold chart
    namesCity: any = [];
    counterCity: any = [];
    ctx: any;

    constructor(private _cityService: CityService, private elementRef: ElementRef, private route: ActivatedRoute, private spinnerServive: Ng4LoadingSpinnerService){
        this.spinnerServive.show();
        this._cityService.getTopCities().subscribe(
            (data: any) => {
                this.cities = data;
                this.cities.forEach(c => {
                    this.namesCity.push(c.name);
                    this.counterCity.push(c.counter);
                });
                this.spinnerServive.hide();
            },
            err => console.log(err)
        );
    }

    ngOnInit(){

        this.ctx = this.elementRef.nativeElement.querySelector("canvas");
        // create the chart using the chart canvas
        this.chart = new Chart(this.ctx, {
        type: 'bar',                                           
        data: {
            labels : this.namesCity,                         // City Names
            datasets : [{
                label: "Bookings",                // LEGEND
                backgroundColor: [ "#F7464A", "#46BFBD", "#FDB45C", "#FEDCBA","#ABCDEF", "#AADDDD", "#ABCABC" , "#FAFAAA"],
                borderColor: [ "#F7464A", "#46BFBD", "#FDB45C", "#FEDCBA","#ABCDEF", "#AADDAA", "#ABCABC" , "#FAFAAA"],
                data : this.counterCity,                     // Booking Count
                spanGaps: false
            }]
          },
        options: {
            animation: {
                easing :"easeOutBounce"
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Cities"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Bookings"
                    }
                }]
            },
            layout:{
                padding:{                                    // padding to the sides of the chart canvas
                left: 100,
                right:0,
                top:0,
                bottom:100
                }
            },
            title:{
                display:true,
                text:"Top Destinations"
            }
        }
        });
    }

}