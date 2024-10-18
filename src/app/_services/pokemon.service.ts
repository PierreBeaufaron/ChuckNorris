import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../_interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) { }

  getPokemonOne(url: string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(url + "?controller=pokemon&task=getById&id=3");
  }

  createPokemon() {}
}
