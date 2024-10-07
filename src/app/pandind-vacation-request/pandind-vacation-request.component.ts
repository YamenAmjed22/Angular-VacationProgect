import { Component, OnInit } from '@angular/core';
import { VacationRequestService } from '../vacation-request.service'; // Import the service
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'panding-vacation-request',
  templateUrl: './pandind-vacation-request.component.html',
  styleUrls: ['./pandind-vacation-request.component.css'],
  imports:[CommonModule]
})
export class PandindVacationRequestComponent implements OnInit {
  
  imageUrl: string = "https://avatars.githubusercontent.com/u/165961256?size=40"; // Fixed 'imagUrl' typo

  vacationRequests: any[] = [];

  constructor(private vacationRequestService: VacationRequestService) {}

  ngOnInit(): void {
    // Fetch the vacation requests from the service
    this.vacationRequests = this.vacationRequestService.getVacationRequests();
  }
}
