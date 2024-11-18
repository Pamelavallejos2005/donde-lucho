import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  constructor(private router: Router) {}


  currentIndex: number = 0;
  totalImages: number = 3; // Cambia este número si tienes más o menos imágenes
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval); // Limpia el intervalo cuando el componente se destruye
  }

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  showPrevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 3000); // Cambia 3000 a cualquier otro valor en milisegundos (3000 ms = 3 segundos)
  }

  iraTipicos() {
    this.router.navigate(['pide-online/tipicos']);
  }
  iraMarinos() {
    this.router.navigate(['pide-online/marinos']);
  }
  iraCriollos() {
    this.router.navigate(['pide-online/criollos']);
  } 
  iraBrasas() {
    this.router.navigate(['pide-online/brasas']);
  } 
  iraPostres() {
    this.router.navigate(['pide-online/postres']);
  } 
  iraComplementos() {
    this.router.navigate(['pide-online/complementos']);
  } 
  iraBebidas() {
    this.router.navigate(['pide-online/bebidas']);
  } 
}
