import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { PlayComponent } from './play/play.component';
import { IndexComponent } from './index/index.component';
import { GameService } from './models/game.service';
import { LoginrComponent } from './loginr/loginr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    PlayComponent,
    IndexComponent,
    LoginrComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
        { path: "play", component: PlayComponent },
        { path: "home", component: IndexComponent },
        { path: "login", component: LoginrComponent },
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
