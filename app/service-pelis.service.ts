import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pelicula } from 'Model/pelicula.interface';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ServicePelisService {
  private url: string = '';
  private apiKey: string = '3ba2f426';
  constructor(private http: HttpClient) {}
    searchaMovies(title: string, type: string){
      this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
      console.log(this.url);
      return this.http.get<Pelicula>(this.url).pipe(map(results => results['Search']));
    }
}
    