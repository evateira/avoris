// src/app/app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FiltersComponent } from './components/filters/filters.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  declarations: [
    AppComponent,
    MatToolbarModule,
    MatExpansionModule,
    FiltersComponent,
    CardsComponent,
    CardComponent,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule
  ],
  imports: [
    AppComponent,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }