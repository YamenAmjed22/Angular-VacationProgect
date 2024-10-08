import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacationHistoryService {
  // Vacation data
  private vacationData = [
    {
      type: 'Annual Vacation',
      dateFrom: '2024-01-15',
      dateTo: '2024-01-30',
      duration: '15 Days',
      approvedBy: 'John Doe'
    },
    {
      type: 'Sick Vacation',
      dateFrom: '2024-05-10',
      dateTo: '2024-05-20',
      duration: '10 Days',
      approvedBy: 'Jane Smith'
    },
    {
      type: 'Annual Vacation',
      dateFrom: '2024-09-01',
      dateTo: '2024-09-10',
      duration: '9 Days',
      approvedBy: 'Alex Johnson'
    },
    {
      type: 'Sick Vacation',
      dateFrom: '2024-08-15',
      dateTo: '2024-08-25',
      duration: '10 Days',
      approvedBy: 'Sarah Wilson'
    },
    {
      type: 'Non Paid Vacation',
      dateFrom: '2024-02-05',
      dateTo: '2024-02-20',
      duration: '15 Days',
      approvedBy: 'Michael Brown'
    },
    {
      type: 'Sick Vacation',
      dateFrom: '2024-06-10',
      dateTo: '2024-06-25',
      duration: '15 Days',
      approvedBy: 'Emily Davis'
    }
  ];

  // Method to get the vacation data
  getVacations() {
    return this.vacationData;
  }

  // Method to get the first row vacations
  getFirstRowVacations() {
    return this.vacationData.slice(0, 4);
  }

  // Method to get the second row vacations
  getSecondRowVacations() {
    return this.vacationData.slice(4, 6);
  }
}
