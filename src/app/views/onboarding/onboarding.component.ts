import { Component, OnInit, AfterViewInit } from '@angular/core';
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
    const carousels = bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1
    });

    // Acceder a la instancia del carrusel y agregar el evento
    carousels.forEach((carousel: any) => {
      carousel.on('slide:after', (event: any) => {
        const currentIndex = event.detail.index; // Índice de la diapositiva actual
        const lastIndex = 2; // Suponiendo que hay 3 imágenes, la última tiene el índice 2

        // Muestra el botón solo cuando está en la última imagen
        this.showContinue = (currentIndex === lastIndex);
        console.log('Current index after slide:', currentIndex); // Mensaje de depuración
      });
    });
  }
}
