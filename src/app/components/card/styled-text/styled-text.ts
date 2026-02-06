import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-styled-text',
  imports: [],
  templateUrl: './styled-text.html',
  styleUrl: './styled-text.css',
})
export class StyledText {
  @Input() inText: string = "";
}
