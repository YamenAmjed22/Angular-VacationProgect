import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  constructor(private router: Router){}
  
  goToProfile(){
    this.router.navigate(["/profile"])
  }
  
  profileData = {
    name: "Yamen Amjed",
    title: "Java Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/165961256?v=4",
    reportingTo: "Salwa Assem",
    level: "level 10",
    viewProfileLink: "viewProfile.html"
  };

}
