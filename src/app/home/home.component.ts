import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  genres: any = [];
  constructor() {}

  ngOnInit(): void {}
}
