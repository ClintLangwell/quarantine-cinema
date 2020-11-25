import { Router } from '@angular/router';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  data: any;
  searchData: any;
  showID: number = -1;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      const query = response.get('query');
      if (query === null) {
        this.getTrending();
      } else {
        this.runSearch(query);
      }
    });
  }

  getTrending = () => {
    this.movieService.getTrending().subscribe((response) => {
      this.data = response;
      this.searchData = this.data.results;
      this.movies = this.movieService.makeMovies(this.searchData);
    });
  };

  runSearch = (query: string) => {
    this.movieService.runSearch(query).subscribe((response: any) => {
      this.data = response;
      this.searchData = this.data.results.filter(
        (items: any) => items.media_type === 'movie'
      );
      this.movies = this.movieService.makeMovies(this.searchData);
    });
  };

  sendToWatchList = (movie: any) => {
    this.movieService.addToWatchList(movie);
  };

  toggleShowId = (id: number) => {
    this.showID === id ? (this.showID = -1) : (this.showID = id);
  };
}
