import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Berk', age: 25, job: 'Developer', employed: true},
    { name: 'Yaren', age: 23, job: 'Veterinarian', employed: true},
    { name: 'Keeva', age: 6, job: 'Cat', employed: false}
  ];

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
