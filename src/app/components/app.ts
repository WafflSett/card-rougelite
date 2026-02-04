import { Component, signal } from '@angular/core';
import { Arena } from "./arena/arena";
import { Collection } from "./collection/collection";
import { ISpell, IUnit } from '../../models/arena/card';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-root',
  imports: [Arena, Collection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  collection: boolean = false;
  game: boolean = false;

  spells: ISpell[] = [];
  units: IUnit[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.getSpells().subscribe({
      next: res=>{
        console.log(res);
        this.spells = res
      },
      error: err=>console.log(err)
    })
    this.dataService.getUnits().subscribe({
      next: res=>{
        console.log(res);
        this.units = res
      },
      error: err=>console.log(err)
    })
  }
}
