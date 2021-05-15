import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchbarSubmit = new EventEmitter<string>();

  term = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(e: Event): void {
    this.term = (e.target as HTMLInputElement).value;
  }

  onSearchbarSubmit(e: Event): void {
    e.preventDefault();

    this.searchbarSubmit.emit(this.term);
  }
}
