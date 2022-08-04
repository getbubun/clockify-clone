import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.css']
})
export class TimeTrackerComponent implements OnInit {
  @Input() allRecordData;
  @Output() onEditEntry = new EventEmitter<any>();
  @Output() onDeleteEntry = new EventEmitter<any>();

  constructor(

  ) { }

  ngOnInit() {
  }

  editEntry(data, index){
    this.onEditEntry.emit({
      data,
      index
    })
  }

  deleteEntry(index){
    this.onDeleteEntry.emit({index});
  }
  


}


