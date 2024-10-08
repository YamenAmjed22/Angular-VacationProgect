import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HighlightPipe } from '../highlited-pipes/highlited-pipes.pipe';
import { VacationRequestCardComponent } from '../VacationRequestCards/create-any-vacation-request.component';
@Component({
  selector: 'vacations-requests',
  templateUrl: './vacation-request.component.html', // Update the file name if necessary
  styleUrls: ['./vacation-request.component.css'],
  standalone: true,
  imports: [FormsModule, HighlightPipe, CommonModule, VacationRequestCardComponent] // Include the shared card component here
})
export class SearchComponent {
  constructor(private router: Router) {}

  goToViewMore() {
    this.router.navigate(["viewMore"]);
  }

  searchText: string = '';
  cardData = [
    { name: "Emma Davis", date: "2024-08-15", duration: "4 days", salary: "$400" },
    { name: "Liam Brown", date: "2024-08-14", duration: "3 days", salary: "$400" },
    { name: "Sophia Wilson", date: "2024-08-13", duration: "2 days", salary: "$400" },
    { name: "Mia Taylor", date: "2024-08-13", duration: "1 days", salary: "$400" }
  ];

  onApprove(card: any) {
    console.log(`Approved request from ${card.name}`);
    // Handle approval logic
  }

  onDecline(card: any) {
    console.log(`Declined request from ${card.name}`);
    // Handle decline logic
  }
}
