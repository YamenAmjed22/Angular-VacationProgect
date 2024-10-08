import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformationsService } from '../user-informations.service';
import { UserInformationInHome } from '../userInformationInHome.model';
@Component({
  standalone:true,
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  profileData!: UserInformationInHome; // Use the interface here

  constructor(private userInfoService: UserInformationsService, private router: Router) {}

  ngOnInit() {
    // Fetch the profile data using the service
    this.userInfoService.getProfileData().subscribe(
      (data) => {
        this.profileData = data; // Strongly typed assignment
      },
      (error) => {
        console.error('Error fetching profile data', error);
      }
    );
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
