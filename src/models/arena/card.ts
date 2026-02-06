import { EElements, EEvents, EKeywords, ERarities } from "../enums/cardEnums"

export interface ICard {
  title: string,
  description: string,
  image:string,
  image_full: string,
  type: string,
  cost: number,
  abilities: IAbility[] | undefined,
  rarity: ERarities
}

export interface ISpell extends ICard {
  element: EElements,
}

export interface IUnit extends ICard {
  attack: number,
  health: number,
  keywords: EKeywords[]
}

export interface IAbility {
  event : EEvents,
  name: string,
  description: string,
}
