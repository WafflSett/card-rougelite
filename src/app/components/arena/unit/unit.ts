import { Component, Input } from '@angular/core';
import { IUnit } from '@models/arena/card';
import { Card } from "../../card/card";

@Component({
  selector: 'app-unit',
  imports: [Card],
  templateUrl: './unit.html',
  styleUrl: './unit.css',
})
export class Unit {
  @Input() unit! : IUnit;
}
