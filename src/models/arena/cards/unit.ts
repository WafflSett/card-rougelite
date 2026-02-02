import ICard from "./card";
import IEffect from "./effect";

export default interface IUnit extends ICard {
  attack: number,
  health: number,
  effects: IEffect[]
}
