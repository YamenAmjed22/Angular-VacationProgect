import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInformationInHome } from './userInformationInHome.model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationsService {
  private profileData: UserInformationInHome = {
    name: "Yamen Amjed",
    title: "Java Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/165961256?v=4",
    reportingTo: "Salwa Assem",
    level: "level 10",
    viewProfileLink: "viewProfile.html"
  };

  constructor() {}

  // Change the return type to Observable<UserInformationInHome>
  getProfileData(): Observable<UserInformationInHome> {
    // Use 'of' to return an observable of the profile data
    return of(this.profileData);
  }
}
