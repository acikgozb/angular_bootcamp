import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageList = [];


  constructor(private wikipediaService: WikipediaService) {
  }

  onTermChange(newTerm: string) {
    this.wikipediaService.search(newTerm)
      .subscribe((response: any) => { // type will be changed later.
        this.pageList = response.query.search
      });
  }
}
