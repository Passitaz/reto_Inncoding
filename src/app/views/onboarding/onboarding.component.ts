import { Component, OnInit, AfterViewInit  } from '@angular/core';
import 'bulma-carousel';

declare var bulmaCarousel: any;

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit, AfterViewInit {
  showContinue: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Inicializar el carrusel después de que se haya renderizado la vista
    const carousel = bulmaCarousel.attach('#carousel-demo', {
      slidesToScroll: 1,
      slidesToShow: 1
    });

    carousel.forEach((carouselItem: any) => {
      carouselItem.on('index.change', (index: number) => {
        // Mostrar el componente "Continuar" cuando el índice sea 2 (tercera imagen)
        this.showContinue = (index === carouselItem.items.length - 1);
      });
    });
  }

}
