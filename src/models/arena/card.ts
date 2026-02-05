import { EElements, EEvents, EKeywords, ERarities } from "../enums/cardEnums"

export interface ICard {
  title: string,
  description: string,
  image:string,
  image_full: string,
  type: string,
  cost: number,
  rarity: ERarities
}

export interface IEffect {
  event : EEvents,
  name: string,
  description: string,
}

export interface ISpell extends ICard {
  element: EElements,
}

export interface IUnit extends ICard {
  attack: number,
  health: number,
  effects: IEffect[] | undefined,
  keywords: EKeywords[]
}