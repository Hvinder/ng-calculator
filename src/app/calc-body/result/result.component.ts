import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() set setExpression(setExpression) {
    this.expression = setExpression;
    try {
      // tslint:disable-next-line: no-eval
      this.result = eval(setExpression);
    } catch {
    }
    console.log(this.expression);
    console.log(this.result);
  }

  @Input() set saveExpression(saveExpression) {
    // tslint:disable-next-line: no-eval
    const value = eval(saveExpression);
    if (!!value) {
      this.savedExpressions.push(`${saveExpression} = ${value}`);
    }
  }

  expression = '';
  result = '';
  savedExpressions = [];

  constructor() { }

  ngOnInit() {
  }

}
