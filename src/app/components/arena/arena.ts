import { ICard, IUnit } from '@models/arena/card';
import { GameService } from '@services/game-service';
import { Component } from '@angular/core';
import { CdkDropList, CdkDrag, CdkDropListGroup, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop'
import { Unit } from "./unit/unit";
import { Card } from "../card/card";

@Component({
  selector: 'app-arena',
  imports: [CdkDropList, Unit, Card, CdkDrag, CdkDropListGroup],
  templateUrl: './arena.html',
  styleUrl: './arena.css',
})
export class Arena {
  constructor(private gameService:GameService){}
  deck:ICard[] = [];
  hand:ICard[] = [];
  playerBoard:ICard[] = [];
  enemyBoard:IUnit[] = [];

  ngOnInit(){
    this.gameService.resetGame();
    this.hand = this.gameService.playerHand;
    this.playerBoard = this.gameService.playerBoard;
    this.deck = this.gameService.deck;
    this.enemyBoard = [];
  }

  drop(event: CdkDragDrop<ICard[]> | CdkDragDrop<IUnit[]>) {
    console.log(event.container);
    console.log(event.previousContainer);

    if (event.previousContainer != event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  isUnit(item: CdkDrag<ICard>){
    if (item.data.type == "unit") {
      return true;
    }
    return false;
  }
}
