import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  watchList: Movie[] = [];
  @Output() watchListEvent = new EventEmitter<Movie>();
  showID: number = -1;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.watchList = this.movieService.getWatchList();
  }

  sendToWatchList = (movie: any) => {
    this.movieService.addToWatchList(movie);
    // movie.onWatchList = !movie.onWatchList;
  };

  toggleShowId = (id: number) => {
    this.showID === id ? (this.showID = -1) : (this.showID = id);
  };
}
