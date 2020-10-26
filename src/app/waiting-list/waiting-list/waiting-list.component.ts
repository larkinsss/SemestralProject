import { WaitingListService } from './../../services/waiting-list.service';
import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { WaitingListEntry } from 'src/app/model/waiting-list-entry';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {
  public waitingList: WaitingListEntry[];

  constructor(private service: WaitingListService) {
    this.waitingList = this.service.getWaitingList();
  }

  ngOnInit(): void {
  }

  onDelete(data: WaitingListEntry): void {
    this.waitingList = this.waitingList.filter((e) => e.email !== data.email);
    this.service.updateList(this.waitingList);
  }


}
