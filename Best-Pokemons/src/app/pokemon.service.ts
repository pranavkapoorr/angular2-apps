import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl = 'api/pokemons';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private messageService: MessageService) { }

  /** Log a pokemonService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PokemonService: ${message}`);
  }

  getPokemons(): Observable<Pokemon[]> {
    this.messageService.add('PokemonService: fetched pokemons');
    return this.http.get<Pokemon[]>(this.pokemonsUrl)
    .pipe(
        tap(_ => this.log('fetched pokemons')),
        catchError(this.handleError('getPokemons', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;
    this.messageService.add(`PokemonService: fetched pokemon id=${id}`);
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  updatePokemon (pokemon: Pokemon): Observable<any> {
    return this.http.put(this.pokemonsUrl, pokemon, this.httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatepokemon'))
    );
    }

  /** POST: add a new Pokemon to the server */
addPokemon (pokemon: Pokemon): Observable<Pokemon> {
  return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, this.httpOptions).pipe(
    tap((newPokemon: Pokemon) => this.log(`added pokemon w/ id=${newPokemon.id}`)),
    catchError(this.handleError<Pokemon>('addPokemon'))
  );
}

/** DELETE: delete the pokemon from the server */
deletePokemon (pokemon: Pokemon | number): Observable<Pokemon> {
  const id = typeof pokemon === 'number' ? pokemon : pokemon.id;
  const url = `${this.pokemonsUrl}/${id}`;

  return this.http.delete<Pokemon>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted pokemon id=${id}`)),
    catchError(this.handleError<Pokemon>('deletePokemon'))
  );
}

/* GET pokemons whose name contains search term */
searchPokemons(term: string): Observable<Pokemon[]> {
  if (!term.trim()) {
    // if not search term, return empty pokemon array.
    return of([]);
  }
  return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found pokemons matching "${term}"`)),
    catchError(this.handleError<Pokemon[]>('searchPokemons', []))
  );
}
  
}
