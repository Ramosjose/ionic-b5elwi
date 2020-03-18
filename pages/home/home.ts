import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

import { ServicePelisService } from '../../app/service-pelis.service';
import { Pelicula } from '../../app/Model/pelicula';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  results: Observable<Pelicula>;
  term: string = '';
  type: string = '';
  constructor(public PelisService: ServicePelisService, public navCtrl: NavController) { }
  ngOnInit() {
  }
  searchChanged(): void {
  
  this.results = this.PelisService.searchaMovies(this.term, this.type);

}
}