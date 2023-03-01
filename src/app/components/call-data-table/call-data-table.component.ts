import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-call-data-table',
  templateUrl: './call-data-table.component.html',
  styleUrls: ['./call-data-table.component.css'],
})
export class CallDataTableComponent implements OnInit, OnChanges {
  @Output() incomingData = new EventEmitter<any>();
  @Input() incomingCallData: any;
  callData: any[];
  CALLDATA: any[];
  sortDirection: string = 'asc';
  sorting: boolean;
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.callData = this.incomingCallData;
    this.CALLDATA = this.incomingCallData;
    this.collectionSize = this.CALLDATA?.length;
  }

  onSort(column: string, sortDirection: string) {
    // SORTING FOR BOOLEAN VALUES
    if (column === 'status' || column === 'system') {
      if (sortDirection === 'asc') {
        this.callData.sort((a, b) => a[column] - b[column]);
      } else {
        this.callData.sort((a, b) => b[column] - a[column]);
      }
      return;
    }

    if (sortDirection === 'asc') {
      this.callData.sort((a, b) => a[column].localeCompare(b[column]));
    } else {
      this.callData.sort((a, b) => b[column].localeCompare(a[column]));
    }
  }

  refreshCallData() {
    this.callData = this.CALLDATA.map((data, i) => ({
      id: i + 1,
      ...data,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  addNewData() {
    this.incomingData.emit('new');
  }
}
