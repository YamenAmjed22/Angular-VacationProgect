import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  newsData = [
    {
        image: 'https://tse2.mm.bing.net/th?id=OIP.EjAL2jn03BXr8OOlqUFm7gHaEK&pid=Api&P=0&h=220',
        title: 'First News',
        description: 'Lorem ipsum dolor sit amet.',
        descriptionStyle: 'font-weight: 700;'
    },
    {
        image: 'https://tse1.mm.bing.net/th?id=OIP.Ec7_gRH4MbBc9kvGUKJXygHaFY&pid=Api&P=0&h=220',
        title: 'Second News',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://tse2.mm.bing.net/th?id=OIP.EjAL2jn03BXr8OOlqUFm7gHaEK&pid=Api&P=0&h=220',
        title: 'Last News',
        description: 'Lorem ipsum dolor sit amet.',
        descriptionStyle: 'font-weight: 700;'
    }
];

}
