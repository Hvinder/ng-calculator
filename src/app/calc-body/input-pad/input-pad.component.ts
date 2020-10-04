import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PwaService } from '../../pwa.service';

@Component({
  selector: 'app-input-pad',
  templateUrl: './input-pad.component.html',
  styleUrls: ['./input-pad.component.scss']
})
export class InputPadComponent implements OnInit {

  @Output() expressionChanged = new EventEmitter<string>();
  @Output() computePressed = new EventEmitter<string>();

  expression = '';

  constructor(public pwaService: PwaService) { }

  ngOnInit() {
  }

  installPwa(): void {
    if (this.pwaService.promptEvent) {
      this.pwaService.promptEvent.prompt();
    }
  }

  buttonClick(value: number | string): void {
    this.expression += value;
    this.evaluate();
  }

  evaluate(): void {
    this.expressionChanged.emit(this.expression);
  }

  compute(): void {
    this.computePressed.emit(this.expression);
    this.expression = '';
  }

  clear(): void {
    this.expression = '';
    this.evaluate();
  }

  backspace(): void {
    this.expression = this.expression.slice(0, -1);
    this.evaluate();
  }
}
