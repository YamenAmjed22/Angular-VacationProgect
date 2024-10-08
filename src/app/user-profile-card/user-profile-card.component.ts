import { Component, OnInit } from '@angular/core';
import { UserProfileDataService } from '../profile-service/user-profile-data.service';
@Component({
  standalone: true,
  selector: 'user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css'],
  imports: []
})
export class UserProfileCardComponent implements OnInit {

  // Define a variable to hold profile data
  profileData: any;

  // Inject the ProfileService into the component
  constructor(private UserProfileDataService: UserProfileDataService) {}

  // Fetch profile data when the component initializes
  ngOnInit(): void {
    this.UserProfileDataService.getProfileData().subscribe(data => {
      this.profileData = data;
    });
  }
}
