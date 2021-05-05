import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  onNameChange(value: string): void {
    this.name = value;
  }

  onDateChange(value: string): void {
    this.date = value;
  }

  onAmountChange(value: string): void {
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string): void {
    this.height = parseFloat(value);
  }

  onMilesChange(value: string): void {
    this.miles = parseFloat(value);
  }
}
