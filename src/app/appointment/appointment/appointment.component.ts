import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { WaitingListEntry } from 'src/app/model/waiting-list-entry';
import { WaitingListService } from 'src/app/services/waiting-list.service';
import { WaitingListEntryComponent } from 'src/app/waiting-list-entry/waiting-list-entry/waiting-list-entry.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email: string;
  descIllness: string;
  timeOfArrival: Date;

  constructor(private service: WaitingListService) {
  }

  ngOnInit(): void {
  }

  addAppointment(): void {
    if (this.firstName !== undefined && this.lastName !== undefined && this.email !== undefined && this.phoneNumber !== undefined) {
      this.timeOfArrival = new Date();
      const list = this.service.getWaitingList();
      const entry = {
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        phoneNumber: this.phoneNumber,
        email: this.email,
        descIllness: this.descIllness,
        timeOfArrival: this.timeOfArrival
      };
      list.push(entry);
      this.service.updateList(list);
    }
  }

}
