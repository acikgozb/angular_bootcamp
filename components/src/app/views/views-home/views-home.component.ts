import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ];

  itemList = [
    {image: '../../../assets/couch.jpeg', title: 'Couch', description: 'A Couch'},
    {image: '../../../assets/dresser.jpeg', title: 'Dresser', description: 'A Dresser'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
