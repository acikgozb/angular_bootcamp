import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue = '';
  randomSentence = lorem.sentence();

  onInputChange(value: string): void {
    console.log(value);
    this.inputValue = value;
  }

  compare(userCharacter: string, randomSentenceCharacter: string): string {
    if (!userCharacter) {
      return '';
    }

    return randomSentenceCharacter === userCharacter ? 'success' : 'error';
  }
}
