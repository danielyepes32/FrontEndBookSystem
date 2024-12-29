import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule],
})
export class CarouselComponent {
  @Input() carouselItems: { image: string; title: string; description: string }[] = [];

  currentIndex = 0;

}
