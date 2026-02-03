import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISpell, IUnit } from '../../models/arena/card';
import { Card } from "../components/card/card";

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
  backClick(){
    this.back.emit()
  }
}
