import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/models/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit() {
  }

  login(){
    this.game.me =new Player();
  }

}
