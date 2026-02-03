import { Component, Input } from '@angular/core';
import { ICard, ISpell, IUnit } from '../../../models/arena/card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() card!: ICard;

  spell: ISpell | undefined;
  unit: IUnit | undefined;
  
  ngOnInit() {
    console.log(this.card);
    if (this.card.type == 'unit') {
      this.unit = this.card as IUnit;
    } else if (this.card.type == 'spell') {
      this.spell = this.card as ISpell;
    }
  }
}
