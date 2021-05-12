import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  isModalVisible = false;
  accordionItems = [
    {title: 'Why is the sky blue?', content: 'The sky is blue because why not.'},
    {title: 'What does an orange taste like?', content: 'The orange tastes like an orange.'},
    {title: 'What color is that cat?', content: 'The cat is orange color.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalVisibility(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}
