import { Component } from '@angular/core';

import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  public imageSources: string[] = [
    '../../assets/images/hiking.jpg',
    '../../assets/images/hiking.jpg',
    '../../assets/images/hiking.jpg'
 ];
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 3000,
   stopAutoplayMinWidth: 500
  //  768
 };

}
