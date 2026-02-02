import { ICard } from "./card";

export default interface IPlayer {
  handSize: number,
  cards: ICard[],
  maxMana: number,
  currentMana: number,
  maxHealth:number,
  currentHealth:number,
  money: number,
}
