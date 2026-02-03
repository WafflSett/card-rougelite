import { Component, Input } from '@angular/core';
import { ISpell } from '../../../models/arena/card';

@Component({
  selector: 'app-spell',
  imports: [],
  templateUrl: './spell.html',
  styleUrl: './spell.css',
})
export class Spell {
  @Input() spell!: ISpell;
}
