import { Component, OnInit , OnDestroy} from '@angular/core';
import { OmdbService } from '../api/omdb.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  imdbID: string; 
  searchMovieByidSub: Subscription;


  constructor(
    private router: Router,
    private omdbService: OmdbService
  ) { }

  ngOnInit(): void {
    this.imdbID = this.omdbService.imdbID;
    this.searchMoviesByid()
  }

  
  ngOnDestroy() {
    this.searchMovieByidSub.unsubscribe();
  }

  searchMoviesByid() {
    this.searchMovieByidSub = this.omdbService.searchMoviesByid().subscribe(
      res => this.searchSuccess(res),
      err => this.searchError(err)
    )
  }

  searchSuccess(res) {
    console.log(res)
  }

  searchError(err) {
   
    console.log(err)
  }

}
