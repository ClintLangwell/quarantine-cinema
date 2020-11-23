import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  trendingData: any;
  topRatedData: any;
  popularData: any;
  trendingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  genres: any = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTrending().subscribe((response) => {
      this.data = response;
      this.trendingData = this.data.results;
      this.trendingMovies = this.movieService.makeMovies(this.trendingData);
    });

    this.movieService.getTopRated().subscribe((response) => {
      this.data = response;
      this.topRatedData = this.data.results;
      this.topRatedMovies = this.movieService.makeMovies(this.topRatedData);
    });

    this.movieService.getPopular().subscribe((response) => {
      this.data = response;
      this.popularData = this.data.results;
      this.popularMovies = this.movieService.makeMovies(this.popularData);
    });
  }
}
