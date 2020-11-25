import { MovieService } from './../movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() movies: any;
  showId: number = -1;
  responsiveOptions = [
    {
      breakpoint: '2064px',
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  toggleShowId = (id: number) => {
    this.showId === id ? (this.showId = -1) : (this.showId = id);
  };

  addToWatchlist = (movie: Movie) => {
    this.movieService.addToWatchList(movie);
    movie.onWatchList = !movie.onWatchList;
  };
}
