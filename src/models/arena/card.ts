import { EElements, EEvents, EKeywords, ERarities } from "../enums/cardEnums"

export interface ICard {
  title: string,
  description: string,
  image:string,
  image_full: string,
  type: string,
  cost: number,
  abilities: IAbility[] | undefined,
  rarity: ERarities,
  element: EElements | undefined,
  attack: number | undefined,
  health: number | undefined,
  keywords: EKeywords[] | undefined
}

export interface IAbility {
  event : EEvents,
  name: string,
  description: string,
}
