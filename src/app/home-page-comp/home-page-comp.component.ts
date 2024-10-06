import { Component } from '@angular/core';
import { VacationAndLeaveComponent } from "../vacation-and-leave/vacation-and-leave.component";
import { UserCardComponent } from "../user-card/user-card.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home-page-comp',
  standalone: true,
  imports: [VacationAndLeaveComponent, UserCardComponent, SliderComponent],
  templateUrl: './home-page-comp.component.html',
  styleUrl: './home-page-comp.component.css'
})
export class HomePageCompComponent {

  welcomeMassege = "Welcome Back Yamen! Here are your latest updates.";
  handleClick() {
    alert("You can't add new request now !");
   }

}
