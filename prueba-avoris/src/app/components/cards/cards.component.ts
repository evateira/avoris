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
    {cols: 12, rows: 12},
    {cols: 12, rows: 12},
    {cols: 12, rows: 12}
  ];

  constructor(public breakpointObserver: BreakpointObserver) {}


  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 740px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is less than 740px!');
          this.tiles = [
            {cols: 12, rows: 15},
            {cols: 12, rows: 15},
            {cols: 12, rows: 15}
          ]
        }
      });
    
    this.breakpointObserver
      .observe(['(min-width: 740px) and (max-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 741px or over and less than 1023px !');
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
          console.log('Viewport is 1024px or over!');
          this.tiles = [
            {cols: 4, rows: 6},
            {cols: 4, rows: 6},
            {cols: 4, rows: 6}
          ]
        }
      });   
    
  }

}
