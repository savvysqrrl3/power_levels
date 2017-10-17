import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individual-power',
  templateUrl: './individual-power.component.html',
  styleUrls: ['./individual-power.component.css']
})
export class IndividualPowerComponent implements OnInit {
  @Input() power;
  @Input () beingName: string;
  constructor() { }

  ngOnInit() {
  }

}
