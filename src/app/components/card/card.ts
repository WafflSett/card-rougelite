import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IAbility, ICard, ISpell, IUnit } from '@models/arena/card';
import { EEvents, EKeywords } from '@models/enums/cardEnums';
import { StyledText } from "./styled-text/styled-text";

@Component({
  selector: 'app-card',
  imports: [CommonModule, StyledText],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() cardClasses: string[] = [
    'rounded-2xl',
    'relative',
    'select-none',
    'card',
    'cursor-pointer',
    'bg-gray-900',
  ];
  @Input() card!: ICard;
  detailsMode: boolean = false;
  spell: ISpell | undefined;
  unit: IUnit | undefined;
  imageOnly: boolean = false;
  isTooltipEnabled: boolean = false;

  ngOnInit() {
    // console.log(this.card);
    if (this.card.type == 'unit') {
      this.unit = this.card as IUnit;
    } else if (this.card.type == 'spell') {
      this.spell = this.card as ISpell;
    }
  }

  pointerMove(e: PointerEvent) {
    if (!this.amIDetailsCard()) {
      const x = e.x;
      const y = e.y;
      const cardElement = e.target as HTMLDivElement;
      const rect = cardElement.getBoundingClientRect();
      const hw = rect.width / 2;
      const hh = rect.height / 2;
      const ratioX = (x - (rect.x + hw)) / hw;
      const ratioY = (y - (rect.y + hh)) / hh;
      cardElement.style.setProperty('--ratio-x', ratioX.toString());
      cardElement.style.setProperty('--ratio-y', ratioY.toString());
    }
  }

  pointerLeave(e: any) {
    const cardElement = e.target as HTMLDivElement;
    cardElement.style.setProperty('--ratio-x', '0');
    cardElement.style.setProperty('--ratio-y', '0');
  }

  toggleDetails(e: any | undefined = undefined) {
    if (e) {
      e.stopPropagation();
    }
    if (this.amIDetailsCard()) {
      this.toggleShowcase();
      return;
    }
    this.detailsMode = !this.detailsMode;
    if (this.detailsMode) {
      this.cardClasses.push('card-details');
    } else {
      this.cardClasses.pop();
    }
  }

  toggleShowcase(e: PointerEvent | undefined = undefined) {
    if (e) {
      e.stopPropagation();
    }
    this.imageOnly = !this.imageOnly;
  }

  closeDetails() {
    if (this.detailsMode) {
      this.toggleDetails();
    }
  }

  amIDetailsCard() {
    if (this.detailsMode == false && this.cardClasses.includes('card-details')) {
      return true;
    }
    return false;
  }

  getAbilityDescription(ability: IAbility) {
    switch (ability.event) {
      case EEvents.OnAttack:
        return 'This ability triggers when I attack.';
      case EEvents.Aura:
        return 'This ability is active while I am in play.';
      case EEvents.OnTargeted:
        return 'This ability triggers when I am targeted by a spell or ability.';
      case EEvents.OnHit:
        return 'This ability triggers when I am hit by a spell or unit.';
      default:
        return '';
    }
  }

  getKeywordDescription(keyword: string){
    switch (keyword) {
      case EKeywords.Elusive:
        return 'This unit cannot be hit by units without the elusive keyword.'
      case EKeywords.Overwhelm:
        return 'Excess damage from this unit is dealt to the next target instead.'
      case EKeywords.Quickstrike:
        return 'This unit strikes first.'
      case EKeywords.Tough:
        return 'This unit takes 1 less damage from all sources.'
      default:
        return '';
    }
  }
}
