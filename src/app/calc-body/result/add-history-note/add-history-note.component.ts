import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-history-note',
  templateUrl: './add-history-note.component.html',
  styleUrls: ['./add-history-note.component.scss']
})
export class AddHistoryNoteComponent implements OnInit {

  historyNote: string;
  // @Output() noteAdded = new EventEmitter<string>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {}, private dialogRef: MatDialogRef<AddHistoryNoteComponent>) { }

  ngOnInit() {
  }

  public cancel() {
    this.dialogRef.close(this.historyNote);
 }

  submit(): void {
    // this.noteAdded.emit(this.historyNote);
  }

}
