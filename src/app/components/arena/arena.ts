import { ICard } from '@models/arena/card';
import { GameService } from '@services/game-service';
import { Component } from '@angular/core';
import {
  CdkDropList,
  CdkDrag,
  CdkDropListGroup,
  CdkDragDrop,
  transferArrayItem,
  moveItemInArray,
  CdkDragPreview,
  CdkDragPlaceholder,
} from '@angular/cdk/drag-drop';
import { Card } from '../card/card';
import { Spell } from './spell/spell';

@Component({
  selector: 'app-arena',
  imports: [
    CdkDropList,
    Card,
    Spell,
    CdkDrag,
    // CdkDropListGroup,
    CdkDragPreview,
    CdkDragPlaceholder,
  ],
  templateUrl: './arena.html',
  styleUrl: './arena.css',
})
export class Arena {
  constructor(private gameService: GameService) {}
  deck: ICard[] = [];
  hand: ICard[] = [];
  spellCasting: ICard[] = [];
  playerBoard: ICard[] = [];
  enemyBoard: ICard[] = [];

  ngOnInit() {
    this.gameService.resetGame();
    this.hand = this.gameService.playerHand;
    this.playerBoard = this.gameService.playerBoard;
    this.deck = this.gameService.deck;
    this.enemyBoard = [];
  }

  drop(event: CdkDragDrop<ICard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.item.data.type == 'unit') {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      } else {
        this.castSpell(event.item.data);
        const { x, y } = event.dropPoint;
        const element = document.elementFromPoint(x, y);
        console.log('Element under pointer:',);
      }
    }
  }

  playUnitPredicate(item: CdkDrag<ICard>) {
    if (item.data.type == 'unit') {
      return true;
    }
    return false;
  }

  playSpellPredicate(item: CdkDrag<ICard>) {
    if (item.data.type == 'spell') {
      return true;
    }
    return false;
  }

  castSpell(spell: ICard) {
    console.log(spell);
  }

  spellHitBoss(event: CdkDragDrop<ICard, any, any>){
    console.log(event.item.data);
  }

  noReturnPredicate() {
    return false;
  }
}
