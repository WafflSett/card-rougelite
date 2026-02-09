import { GameService } from './../../services/game-service';
import { Component, signal } from '@angular/core';
import { Arena } from "./arena/arena";
import { Collection } from "./collection/collection";
import { ISpell, IUnit } from '../../models/arena/card';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-root',
  imports: [Arena, Collection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  collection: boolean = false;
  game: boolean = false;
  constructor(private gameService:GameService){}
}
