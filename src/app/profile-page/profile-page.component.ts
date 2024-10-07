import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileCardComponent } from "../user-profile-card/user-profile-card.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  


}
