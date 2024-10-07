import { Component, OnInit } from '@angular/core';
import { VacationHistoryService } from '../vacation-history.service';
import { CommonModule } from '@angular/common'; 
@Component({
  standalone:true,
  selector: 'app-vacation-history',
  templateUrl: './vacation-history.component.html',
  styleUrls: ['./vacation-history.component.css'],
  imports:[CommonModule]
})
export class VacationHistoryComponent implements OnInit {
  firstRowVacations: any[] = [];
  secondRowVacations: any[] = [];

  constructor(private VacationHistoryService: VacationHistoryService) { }

  ngOnInit(): void {
    // Fetch the vacations data from the service
    this.firstRowVacations = this.VacationHistoryService.getFirstRowVacations();
    this.secondRowVacations = this.VacationHistoryService.getSecondRowVacations();
  }
}
