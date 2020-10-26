import { WaitingListEntry } from 'src/app/model/waiting-list-entry';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WaitingListComponent } from '../waiting-list/waiting-list/waiting-list.component';

@Injectable({
  providedIn: 'root'
})
export class WaitingListService {
  public waitingListMockup: WaitingListEntry[] = [
    {
      firstName: 'Peter',
      lastName: 'Lancaric',
      dateOfBirth: new Date('1996-09-02'),
      phoneNumber: '05165165132132',
      email: 'peter.lancaric@gmail.com',
      descIllness: 'headache and sorethroat',
      timeOfArrival: new Date(2020, 9, 26, 18, 56),
    },
    {
      firstName: 'Adam',
      lastName: 'Mrkvicka',
      dateOfBirth: new Date('1997-12-11'),
      phoneNumber: '546484121384874',
      email: 'adam.mrkvicka@gmail.com',
      descIllness: 'stomachache',
      timeOfArrival: new Date(2020, 9, 26, 19, 23)
    }
  ];


  constructor() { }

  getWaitingList(): WaitingListEntry[] {
    return this.waitingListMockup;
  }

  updateList(data: WaitingListEntry[]): void{
    this.waitingListMockup = data;
  }
}
