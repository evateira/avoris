import { Component, OnInit} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';


export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-cards',
  imports: [
    CardComponent,
    MatGridListModule, 
    CommonModule      
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})



export class CardsComponent implements OnInit {


  tiles: Tile[] = [
    {cols: 12, rows: 1},
    {cols: 12, rows: 1},
    {cols: 12, rows: 1}
  ];

  constructor(public breakpointObserver: BreakpointObserver) {}


  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 740px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 500px or over!');
          this.tiles = [
            {cols: 12, rows: 12},
            {cols: 12, rows: 12},
            {cols: 12, rows: 12}
          ]
        }
      });
    
    this.breakpointObserver
      .observe(['(min-width: 740px) and (max-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 576px or over and less than 767px !');
          this.tiles = [
            {cols: 6, rows: 8},
            {cols: 6, rows: 8},
            {cols: 6, rows: 8}
          ]
        }
      });
    
    this.breakpointObserver
      .observe(['(min-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 768px or over and less than 991px !');
          this.tiles = [
            {cols: 4, rows: 4},
            {cols: 4, rows: 4},
            {cols: 4, rows: 4}
          ]
        }
      });   
    
  }

}
