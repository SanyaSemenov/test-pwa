export interface JokeResponse {
    type?: string;
    value?: Joke | Joke[];
}

export interface Joke {
    id?: number;
    joke?: string;
}
