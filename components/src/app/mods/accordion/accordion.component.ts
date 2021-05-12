import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];

  activeAccordionIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onIndexChange(e: Event, willBeActiveIndex: number): void {
    if (willBeActiveIndex === this.activeAccordionIndex){
      this.activeAccordionIndex = -1;
    } else {
      this.activeAccordionIndex = willBeActiveIndex;
    }
  }
}
