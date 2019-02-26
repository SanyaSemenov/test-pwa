import { Component } from '@angular/core';
import { JokeService, JokeResponse, Joke } from './joke';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'test-pwa';

  constructor(private joke$: JokeService) {
    let ngUnsubscribe = new Subject<void>();
    joke$.getJoke()
      .pipe(takeUntil(ngUnsubscribe))
      .subscribe((joke: Joke) => {
        this.jokeText = joke.joke;
      });
    setInterval(() => {
      ngUnsubscribe.next();
      ngUnsubscribe.complete();
      ngUnsubscribe = new Subject<void>();
      joke$.getJoke()
        .pipe(takeUntil(ngUnsubscribe))
        .subscribe((joke: Joke) => {
          this.jokeText = joke.joke;
        });
    }, 20000);
  }

  public jokeText: string;
}
