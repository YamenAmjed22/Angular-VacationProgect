import { Component } from '@angular/core';
import { VacationAndLeaveComponent } from "../vacation-and-leave/vacation-and-leave.component";
import { UserCardComponent } from "../user-card/user-card.component";
import { SliderComponent } from "../slider/slider.component";
import { SearchComponent } from "../vacation-request/vacation-request.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-comp',
  standalone: true,
  imports: [VacationAndLeaveComponent, UserCardComponent, SliderComponent, SearchComponent],
  templateUrl: './home-page-comp.component.html',
  styleUrl: './home-page-comp.component.css'
})
export class HomePageCompComponent {
  constructor(private router: Router){}

  welcomeMassege = "Welcome Back Yamen! Here are your latest updates.";
  handleClick() {
        alert("The new request button does not work ");
   }

}
