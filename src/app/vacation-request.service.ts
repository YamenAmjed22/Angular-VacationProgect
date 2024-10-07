import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {
  // Define vacation requests data
  private vacationRequests = [
    {
      name: "Jane Smith",
      imageSrc: " https://avatars.githubusercontent.com/u/165961256?size=40" ,// Fixed 'imagUrl' typo
      submittedOn: "2024-08-29",
      duration: "3 days (29/8/2024 - 1/9/2024)",
      currentlyAt: "Omar Ahmad"
    },
    {
      name: "John Doe",
      imageSrc: "/assets/images/8N7A5661.JPG",
      submittedOn: "2024-09-01",
      duration: "5 days (1/9/2024 - 5/9/2024)",
      currentlyAt: "Salwa Assem"
    }
    // Add more requests as needed
  ];

  // Method to get vacation requests
  getVacationRequests() {
    return this.vacationRequests;
  }
}
