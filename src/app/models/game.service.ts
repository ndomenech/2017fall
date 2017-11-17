import { Injectable,  } from '@angular/core';
import { Player } from 'app/models/game';
import { Http } from '@angular/http';

@Injectable()
export class GameService  {

  apiRoot = '//localhost:3001';

  me: Player;

  constructor(private http: Http) {
    this.login("Barak Obama");
  }

  login(name: string){
    this.me = new Player();
    this.me.name = name;
    this.http.get(this.apiRoot + '/game/quotes').subscribe( data =>{
      this.me.quotes = data.json();

    });

  }

}
