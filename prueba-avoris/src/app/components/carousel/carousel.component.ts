import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular';


@Component({
  selector: 'app-carousel',
  imports: [
    IgxCarouselComponent,
    IgxSlideComponent,   
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent {
   public slides = [
      {
        src: 'avoris-bg-desktop.svg',
        title: 'Slide',
        description: 'This is the description for the first slide.'
      },
      {
        src: 'avoris-bg-desktop.svg',
        title: 'Slide',
        description: 'This is the description for the first slide.'
      },
      {
        src: 'avoris-bg-desktop.svg',
        title: 'Slide',
        description: 'This is the description for the first slide.'
      }
  ];

}
