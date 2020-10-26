import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WaitingListEntry } from 'src/app/model/waiting-list-entry';

@Component({
  selector: 'app-waiting-list-entry',
  templateUrl: './waiting-list-entry.component.html',
  styleUrls: ['./waiting-list-entry.component.scss']
})
export class WaitingListEntryComponent {

  @Input()
  public data: WaitingListEntry;

  @Output()
  public delete = new EventEmitter<WaitingListEntry>();

}
