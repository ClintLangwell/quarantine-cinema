import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-trending-carousel',
  templateUrl: './trending-carousel.component.html',
  styleUrls: ['./trending-carousel.component.css'],
})
export class TrendingCarouselComponent implements OnInit {
  @Input() trendingMovies: Movie[];
  constructor() {}

  ngOnInit(): void {}
}
