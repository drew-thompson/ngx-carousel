import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselFeatureModule } from '@ngx-carousel/carousel/feature';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarouselFeatureModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
