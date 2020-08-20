import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OmdbService {
  movieTitle: string;
  imdbID: string;

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(): Observable<any> {
    if (this.movieTitle === undefined || this.movieTitle === null) { this.movieTitle = ''; }
    const url = 'https://primeprojects.club:3003/omdb/search?title=' + this.movieTitle;
    return this.http.get(url);
  }

  searchMoviesByid(): Observable<any> {
    if (this.imdbID === undefined || this.imdbID === null) { this.imdbID = ''; }
    const url = 'https://primeprojects.club:3003/omdb/imdb/' + this.imdbID;
    return this.http.get(url);
  }
}
