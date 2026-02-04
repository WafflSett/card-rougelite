import { Component, Input } from '@angular/core';
import { IUnit } from '@models/arena/card';

@Component({
  selector: 'app-unit',
  imports: [],
  templateUrl: './unit.html',
  styleUrl: './unit.css',
})
export class Unit {
  @Input() unit! : IUnit;
}
