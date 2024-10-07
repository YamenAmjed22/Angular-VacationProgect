import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileCardComponent } from "../user-profile-card/user-profile-card.component";
import { VacationHistoryComponent } from "../vacation-history/vacation-history.component";
import { PandindVacationRequestComponent } from "../panding-vacation-request/pandind-vacation-request.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileCardComponent, VacationHistoryComponent, PandindVacationRequestComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  


}
