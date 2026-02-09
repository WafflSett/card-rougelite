import { Injectable } from '@angular/core';
import { ICard, ISpell, IUnit } from '@models/arena/card';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  playerHand: ICard[] = [];
  playerBoard: IUnit[] = [];
  deck: ICard[] = [];
  spells: ISpell[] = [];
  units: IUnit[] = [];
  allCards:ICard[] =[];

  constructor(private dataService: DataService) {
    this.loadCards();
  }

  loadCards() {
    this.dataService.getSpells().subscribe({
      next: (res) => {
        console.log(res);
        this.spells = res;
        this.allCards = [...this.spells, ...this.units];
      },
      error: (err) => console.log(err),
    });
    this.dataService.getUnits().subscribe({
      next: (res) => {
        console.log(res);
        this.units = res;
        this.allCards = [...this.spells, ...this.units];
      },
      error: (err) => console.log(err),
    });
  }

  resetGame(){
    this.playerBoard = [];
    this.deck = [...this.allCards];
    this.deck.sort(()=> 0.5 - Math.random());
    this.playerHand = this.draw(6);
  }

  draw(n:number):ICard[]{
    let cards :ICard[] = [];
    for (let i = 0; i < n; i++) {
      let nextCard = this.deck.pop();
      if (nextCard) {
        cards.push(nextCard);
      }
    }
    return cards;
  }
}
