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
  @Input() spells!: ISpell[]
  @Input() units!: IUnit[]
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  allCards:ICard[] = [];

  ngOnInit(){
    this.allCards = [...this.spells, ...this.units];
  }

  backClick(){
    this.back.emit()
  }
}
