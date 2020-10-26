import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export interface WaitingListEntry{
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    phoneNumber: string;
    email: string;
    descIllness: string;
    timeOfArrival: Date;
}