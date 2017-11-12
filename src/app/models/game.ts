
export class Quote {
    text: string
}

export class Player {
    name: string = "Moshe Plotkin";
    quotes: Quote[] = [];
    score: number = 0;
 
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];

   
    drawQuotes(){
        $("#played-quotes").html(
            this.quotes.map( x => `<li class="list-group-item">${x.text}</li>` ).join("")
        );
    }
    drawPlayers(){
        $("#players").html(
            this.players.map( x => `<li class="list-group-item">${x.name}</li>` ).join("")
        );
    }

}

