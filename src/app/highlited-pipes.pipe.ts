import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchText: string): string {
    if (!searchText) {
      return value; // Return original value if no search text
    }

    const regex = new RegExp(`(${searchText})`, 'gi'); // Case-insensitive matching
    return value.replace(regex, '<span class="highlight">$1</span>'); // Highlight matched text
  }
}
