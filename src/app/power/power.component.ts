import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power_level: number;
  form_data: number;
  onSubmit(){
    this.power_level = this.form_data; 
  };
  constructor() { }

  ngOnInit() {
  }

}
