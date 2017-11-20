import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PlayComponent } from './play/play.component';
import { IndexComponent } from './index/index.component';
import { GameService } from 'app/models/game.service';
import { LoginComponent } from 'app/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PlayComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule
    RouterModule.forRoot([
      { path: 'play', component: PlayComponent },
      { path: 'home', component: IndexComponent },
      { path: 'login', component: LoginComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' }
    ])
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
