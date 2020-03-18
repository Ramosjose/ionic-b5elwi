import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

import { ServicePelisService } from '../../service-pelis.service';
import { Pelicula } from '../../Model/pelicula.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  results: Observable<Pelicula>;
  term: string = '';
  type: string = '';
  constructor(public navCtrl: NavController) { }
  ngOnInit() {
  }
  searchChanged(): void {
  this.results = this.ServicePelisService.searchaMovies(this.term, this.type);

}
}