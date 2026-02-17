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
        class: 'image-bg slide-1',
        src: 'avoris-bg-desktop.svg',
        title: 'Slide',
        description: 'This is the description for the first slide.'
      },
      {
        class: 'image-bg slide-2',
        src: 'avoris-bg-desktop.svg',
        title: 'Slide',
        description: 'This is the description for the first slide.'
      },
      {
        class: 'image-bg slide-3',
        src: 'avoris-bg-desktop.svg',
        title: 'Slide',
        description: 'This is the description for the first slide.'
      }
  ];

}
