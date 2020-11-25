import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [];
  watchList: Movie[] = [];
  trendingBaseUrl: string = 'https://api.themoviedb.org/3/trending/movie/week';
  genreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  topRatedUrl: string = 'https://api.themoviedb.org/3/movie/top_rated';
  popularUrl: string = 'https://api.themoviedb.org/3/movie/popular';
  multiSearchUrl: string = 'https://api.themoviedb.org/3/search/multi';
  key: string = '4d6b6d705d0ccdf5166bc895195797a2';
  mediaType: string = 'movie';
  timeWindow: string = 'week';
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w185';

  constructor(private http: HttpClient) {}

  getTrending = () => {
    return this.http.get(this.trendingBaseUrl, {
      params: {
        api_key: this.key,
        media_type: this.mediaType,
        time_window: this.timeWindow,
      },
    });
  };

  getGenreList = () => {
    return this.http.get(this.genreUrl, {
      params: {
        api_key: this.key,
      },
    });
  };

  getTopRated = () => {
    return this.http.get(this.topRatedUrl, {
      params: {
        api_key: this.key,
      },
    });
  };

  getPopular = () => {
    return this.http.get(this.popularUrl, {
      params: {
        api_key: this.key,
      },
    });
  };

  runSearch = (term: string): any => {
    return this.http.get(this.multiSearchUrl, {
      params: {
        api_key: this.key,
        query: term,
      },
    });
  };

  addToWatchList = (movie: Movie) => {
    const index = this.watchList.findIndex((item) => {
      return item.id === movie.id;
    });
    if (index === -1) {
      this.watchList.push(movie);
    } else {
      this.watchList.splice(index, 1);
    }
  };

  getWatchList = () => {
    return this.watchList;
  };

  makeMovies = (data: any): Movie[] => {
    const movieArray: Movie[] = [];
    data.forEach((item: any) => {
      const newMovie: Movie = {
        title: item.title,
        genre: item.genre_ids,
        image: this.imageBaseUrl + item.poster_path,
        id: item.id,
        overview: item.overview,
        vote_average: item.vote_average,
        release_date: item.release_date,
        backdrop_path: this.imageBaseUrl + item.backdrop_path,
        onWatchList: false,
      };
      movieArray.push(newMovie);
    });
    movieArray.forEach((movie: Movie, index) => {
      if (movie.image.includes('null')) {
        movieArray.splice(index, 1);
      }
    });
    return movieArray;
  };

  getMovies = (): Movie[] => {
    return this.movies;
  };
}
