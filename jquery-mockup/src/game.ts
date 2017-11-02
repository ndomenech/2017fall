import * as $ from 'jquery';

export class Quote {
    text: string
}

export class Player {
    name: string = "Moshe Plotkin";
    quotes: Quote[] = [];
    score: number = 0;

    drawQuotes(){
        $("#my-quotes").html(
            this.quotes.map( x => `<li class="list-group-item">${x.text}</li>` ).join("")
        );
    }

    init(){
        $.getJSON("./game/quote").done( data =>{
            this.quotes = data;
            this.drawQuotes;
        }
        )
    }
}


export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];

    drawPicture() {
        $("#picture").attr("src", this.picture);
    }
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

    update(){
        $.get("/game/room/picture").done( data => {
            this.picture = data; 
            this.drawPicture();
    });
    
        $.get("/game/room/quotes").done( data =>{
            this.quotes = data; 
            this.drawQuotes();
    }) ; 


    }

    init(){
        setInterval(()=> this.update(), 1000)
    }
}

export class Game {
    players: Player[] = [];
    pictures: string[] = [];
    quotes: Quote[] = [];

    init(){
        return $.when(
            $.getJSON("/game/pictures").done( data => {
                    this.pictures = data 
                    
            }),
            
            $.getJSON("/game/quotes").done( data =>{
                this.quotes = data 
               
            })   
        )   
    }
}

// Controller
const game = new Game();
const room = new Room();
const me = new Player();
var i = 0;
me.init();
room.init();
game.init().done(()=>{
    room.drawPlayers();
    
    me.quotes = game.quotes;
    me.drawQuotes();
    
});



$("#cmd-flip").click(function(e){
    e.preventDefault();
    $.post("/game/room/picture")
})

$("#my-quotes").click( "li", function(e){
    e.preventDefault();
    const $li = $(e.originalEvent.srcElement );
    const data = { text: $li.text() };
    $.post("/game/room/quotes", data );
    $li.remove();
})