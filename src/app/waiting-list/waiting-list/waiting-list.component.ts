import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WaitingListEntry } from 'src/app/model/waiting-list-entry';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {
  public waitingList: Array<WaitingListEntry>;

  constructor() { }

  ngOnInit(): void {
    let entry1 = new WaitingListEntry();
    entry1.first_name = 'Peter';
    entry1.last_name = 'Lancaric';
    entry1.date_of_birth = new Date("1996-09-02");
    entry1.phone_number = '05165165132132'
    entry1.email = 'peter.lancaric@gmail.com'
    this.waitingList.push(entry1);

    let entry2 = new WaitingListEntry();
    entry2.first_name = 'Adam';
    entry2.last_name = 'Lany';
    entry2.date_of_birth = new Date("1997-12-11");
    entry2.phone_number = '546484121384874'
    entry2.email = 'adam.lany@gmail.com'
    this.waitingList.push(entry2);
  }

  onDelete(data: WaitingListEntry): void {
  }


}
