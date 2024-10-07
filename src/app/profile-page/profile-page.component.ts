import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileCardComponent } from "../user-profile-card/user-profile-card.component";
import { VacationHistoryComponent } from "../vacation-history/vacation-history.component";
import { PandindVacationRequestComponent } from "../pandind-vacation-request/pandind-vacation-request.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [UserProfileCardComponent, VacationHistoryComponent, PandindVacationRequestComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  


}
