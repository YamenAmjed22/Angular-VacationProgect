import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HighlightPipe } from "../highlited-pipes/highlited-pipes.pipe";

@Component({
  standalone:true,
  selector: 'app-vacation-request-card',
  templateUrl: './create-any-vacation-request.component.html',
  styleUrls: ['./create-any-vacation-request.component.css'],
  imports: [HighlightPipe]
})
export class VacationRequestCardComponent {
  @Input() name!: string; // Employee's name
  @Input() submittedDate!: string; // Date of submission
  @Input() duration!: string; // Duration of the vacation
  @Input() salary!: string; // Salary during the vacation
  @Input() searchText!: string; 
  @Output() approve = new EventEmitter<void>(); // Event for approve action
  @Output() decline = new EventEmitter<void>(); // Event for decline action


  onApprove() {
    this.approve.emit();
  }

  onDecline() {
    this.decline.emit();
  }
}

