import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddHistoryNoteComponent } from './add-history-note/add-history-note.component';
import { History } from './types/history.type';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() set setExpression(setExpression) {
    this.expression = setExpression;
    this.getResult(this.expression);
  }

  @Input() set saveExpression(saveExpression) {
    // tslint:disable-next-line: no-eval
    const value = eval(saveExpression);
    if (!!value) {
      const history: History = {
        expression: saveExpression,
        result: value,
        note: '',
        timestamp: new Date(),
      };
      this.savedHistory.push(history);
    }
  }

  expression = '';
  result = '';
  savedHistory: History[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  getResult(expression: string): void {
    try {
      // tslint:disable-next-line: no-eval
      this.result = eval(expression);
    } catch {}
  }

  addNote(timestamp: Date): void {
    // this.savedHistory[index].note = 'Note';
    const i: number = this.savedHistory.findIndex(
      (history) => history.timestamp === timestamp
    );
    const dialogRef = this.dialog.open(AddHistoryNoteComponent, {
      data: {
        timestamp,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
      this.savedHistory[i].note = result;
    });
  }

  bringForward(timestamp: Date): void {
    const expression: string = this.savedHistory.find(
      (history) => history.timestamp === timestamp
    ).expression;
    this.expression = expression;
    this.getResult(this.expression);
  }
}
