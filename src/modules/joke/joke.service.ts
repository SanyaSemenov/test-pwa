import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JokeResponse, Joke } from './joke.interface';

const API_ENDPOINT = 'https://api.icndb.com/jokes/random';

@Injectable()
export class JokeService {

  constructor(
    private http$: HttpClient
  ) { }

  getJoke(): Observable<Joke | Joke[]> {
    return this.http$.get(API_ENDPOINT)
      .pipe(map((response: JokeResponse) => {
        return response.value;
      }));
  }
}
