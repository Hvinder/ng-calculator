import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-body',
  templateUrl: './calc-body.component.html',
  styleUrls: ['./calc-body.component.scss']
})
export class CalcBodyComponent implements OnInit {

  expression = '';
  saveExpression = '';

  constructor() { }

  ngOnInit() {
  }

  expressionChanged(expression: string): void {
    this.expression = expression;
  }

  computePressed(expression: string): void {
    this.saveExpression = expression;
  }
}
