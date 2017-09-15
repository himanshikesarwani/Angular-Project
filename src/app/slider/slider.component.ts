import { Component, OnInit } from '@angular/core';
// Import the Image interface
import {Image} from '../image.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  //public images = IMAGES;
  //IMAGES array implementing Image interface
 
  images: Image[] = [
    { "title": "Welcome to the Manlets","subtitle":"Lettings and Property Management", "url": "/assets/images/slider/slide1.jpg" },
    { "title": "Welcome to the Manlets", "subtitle":"Lettings and Property Management","url": "/assets/images/slider/slide2.jpg" },
    { "title": "Welcome to the Manlets", "subtitle":"Lettings and Property Management","url": "/assets/images/slider/slide3.jpg" },
    { "title": "Welcome to the Manlets", "subtitle":"Lettings and Property Management","url": "/assets/images/slider/slide4.jpg" },
    { "title": "Welcome to the Manlets", "subtitle":"Lettings and Property Management","url": "/assets/images/slider/slide1.jpg" } 
  ];
 
  constructor() { }

  ngOnInit() {
    
  }

}
