import { Component, Input } from '@angular/core';
import { ICard } from '../../../models/arena/card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() card!: ICard;
}
