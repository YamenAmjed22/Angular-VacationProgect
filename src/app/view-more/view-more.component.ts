import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlited-pipes/highlited-pipes.pipe';
import { VacationRequestCardComponent } from '../VacationRequestCards/create-any-vacation-request.component';


interface VacationCard {
  name: string;
  date: string;
  duration: string;
  salary: string;
  selected?: boolean;
}

@Component({
  standalone: true,
  selector: 'app-vacation-requests',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css'],
  imports: [FormsModule, CommonModule, HighlightPipe,VacationRequestCardComponent]
})
export class ViewMoreComponent implements OnInit {
  imageUrl: string = "https://avatars.githubusercontent.com/u/165961256?size=40";

  @Input() selectAll: boolean = false;
  @Output() selectAllChange = new EventEmitter<boolean>();

  // Array of vacation cards
  cards: VacationCard[] = [
    { name: "John Doe", date: "2024-08-10", duration: "11 days", salary: "$400" },
    { name: "Alice Johnson", date: "2024-08-11", duration: "10 days", salary: "$400" },
    { name: "Bob Brown", date: "2024-08-12", duration: "9 days", salary: "$400" },
    { name: "Charlie Smith", date: "2024-08-13", duration: "8 days", salary: "$400" },
    { name: "David Wilson", date: "2024-08-14", duration: "7 days", salary: "$400" },
    { name: "Eve Davis", date: "2024-08-15", duration: "6 days", salary: "$400" },
    { name: "Frank White", date: "2024-08-16", duration: "5 days", salary: "$400" },
    { name: "Grace Lee", date: "2024-08-17", duration: "4 days", salary: "$400" },
    { name: "Hannah Taylor", date: "2024-08-18", duration: "3 days", salary: "$400" },
    { name: "Isaac Brown", date: "2024-08-19", duration: "2 days", salary: "$400" },
    { name: "Jack Black", date: "2024-08-20", duration: "1 day", salary: "$400" },
    { name: "Laura Green", date: "2024-08-21", duration: "12 days", salary: "$500" },
  ];

  cardsPerPage = 6;
  currentPage = 1;
  pagedData: VacationCard[] = [];
  searchQuery = '';
  totalPages: number[] = [];

  constructor(private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.initPagination();
  }

  initPagination() {
    this.updateTotalPages(this.cards.length);
    this.displayPage(1);
  }

  displayPage(page: number) {
    this.currentPage = page;
    const filteredCards = this.getFilteredCards();

    if (filteredCards.length === 0) {
      this.pagedData = [];
      this.updateTotalPages(0);
      return;
    }

    const start = (page - 1) * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.pagedData = filteredCards.slice(start, end);
    this.updateSelectAll();
  }

  getFilteredCards(): VacationCard[] {
    if (this.searchQuery) {
      return this.cards.filter(card =>
        card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    return this.cards;
  }

  search() {
    this.currentPage = 1;
    this.displayPage(this.currentPage);
    this.updateTotalPages(this.getFilteredCards().length);
  }

  updateTotalPages(cardCount: number) {
    this.totalPages = Array(Math.ceil(cardCount / this.cardsPerPage)).fill(0).map((_, i) => i + 1);
  }

  toggleSelectAll() {
    this.cards.forEach(card => card.selected = this.selectAll);
    this.selectAllChange.emit(this.selectAll);
  }

  toggleCardSelection(index: number) {
    const cardIndex = (this.currentPage - 1) * this.cardsPerPage + index;
    this.cards[cardIndex].selected = !this.cards[cardIndex].selected; // Directly toggle the selected state
    this.updateSelectAll();
  }

  updateSelectAll() {
    this.selectAll = this.pagedData.every(card => card.selected);
    this.selectAllChange.emit(this.selectAll);
  }

  goToPage(page: number) {
    this.displayPage(page);
  }

  // Navigate to the next route with selected cards
  goToSelected() {
    const selectedCards = this.cards.filter(card => card.selected);
    this.router.navigate(['/your-next-route'], { queryParams: { selected: JSON.stringify(selectedCards) } });
  }
  onApprove(card: any) {
    console.log(`Approved request from ${card.name}`);
    // Handle approval logic
  }

  onDecline(card: any) {
    console.log(`Declined request from ${card.name}`);
    // Handle decline logic
  }
}
