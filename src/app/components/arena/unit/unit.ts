import { Component, Input } from '@angular/core';
import { ICard } from '@models/arena/card';
import { Card } from "../../card/card";

@Component({
  selector: 'app-unit',
  imports: [Card],
  templateUrl: './unit.html',
  styleUrl: './unit.css',
})
export class Unit {
  @Input() unit! : ICard;
}
