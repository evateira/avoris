// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
  ],
  imports: [
    AppComponent,
    CarouselComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }