import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TrendingCarouselComponent } from './trending-carousel/trending-carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    TrendingCarouselComponent,
    HeaderComponent,
    FooterComponent,
    MovieInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
