import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserProfileDataService {

  private profileData = {
    name: "Yamen Amjed",
    jobTitle: "Java Developer",
    subtitle: "Junior Developer",
    profileImage: "https://avatars.githubusercontent.com/u/165961256?size=60",
    reportingTo: "Salwa Assem",
    corporateLevel: "Level 10",
    lifetime: "2.5 Years",
    vacationDaysLeft: "10 Days",
    sickDaysLeft: "15 Days"
  };

  constructor() { }

  getProfileData(): Observable<any> {
    return of(this.profileData); // Simulate an API call with Observable
  }
}
