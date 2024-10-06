import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  imageUrl: string = "https://avatars.githubusercontent.com/u/165961256?size=40"; // Fixed 'imagUrl' typo
  constructor(private router: Router){}
  goToProfile(){
    this.router.navigate(["/profile"])
  }
  goToHome(){
    this.router.navigate([""])

  }
  

}
