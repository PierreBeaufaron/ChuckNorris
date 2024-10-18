import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeInterface } from '../_interfaces/joke.interface';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http: HttpClient,
  ) { }

  getJokeRandom(url: string): Observable<JokeInterface> {
    return this.http.get<JokeInterface>(url + "random");
  }

  // CRUD par défaut
  getJokeAll() {}

  getJokeOne() {}

  createJoke() {}

  deleteJoke() {}

  patchJoke() {}
}
