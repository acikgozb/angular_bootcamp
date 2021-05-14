import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-showcase',
  templateUrl: './photo-showcase.component.html',
  styleUrls: ['./photo-showcase.component.css']
})
export class PhotoShowcaseComponent implements OnInit {
  randomImageSource = "";

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.fetchPhoto();
  }

  onButtonClick(): void {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getRandomPhoto().subscribe(randomPhoto => this.randomImageSource = randomPhoto.urls.regular);
  }
}
