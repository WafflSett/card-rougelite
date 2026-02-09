import { GameService } from '@services/game-service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICard, ISpell, IUnit } from '@models/arena/card';
import { Card } from "../card/card";

@Component({
  selector: 'app-collection',
  imports: [Card],
  templateUrl: './collection.html',
  styleUrl: './collection.css',
})
export class Collection {
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  allCards:ICard[] = [];

  constructor(private gameService:GameService){}
  ngOnInit(){
    this.allCards = this.gameService.allCards;
  }

  backClick(){
    this.back.emit()
  }
}
