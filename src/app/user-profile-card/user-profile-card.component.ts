import { Component } from '@angular/core';

@Component({
  standalone :true , 
  selector: 'user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})
export class ProfileCardComponent {
  // Define the profile data
  profileData = {
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
}
