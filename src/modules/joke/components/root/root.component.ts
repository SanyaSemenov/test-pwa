import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { JokeService } from '../../joke.service';
import { Joke } from '../../joke.interface';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.less']
})
export class RootComponent implements OnInit {

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

  ngOnInit() {
  }

}
