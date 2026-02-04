import { Component, Input } from '@angular/core';
import { ICard, ISpell, IUnit } from '@models/arena/card';

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

  pointerMove(e:PointerEvent){
    const x = e.x;
    const y = e.y;
    const cardElement = (e.target as HTMLDivElement);
    const rect = cardElement.getBoundingClientRect();
    const hw = rect.width / 2;
    const hh = rect.height / 2;
    const ratioX = (x - (rect.x + hw)) / hw;
    const ratioY = (y - (rect.y + hh)) / hh;
    cardElement.style.setProperty("--ratio-x", ratioX.toString());
    cardElement.style.setProperty("--ratio-y", ratioY.toString());
  }

  pointerLeave(e:any){
    const cardElement = (e.target as HTMLDivElement);
    cardElement.style.setProperty("--ratio-x", "0");
    cardElement.style.setProperty("--ratio-y", "0");
  }
}
