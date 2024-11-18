import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dondelucho';
  activeLink: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Suscribirse a los eventos del enrutador para obtener la ruta actual
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Extraer la última parte de la ruta y actualizar activeLink
        const urlPath = event.urlAfterRedirects.split('/')[1];
        this.activeLink = urlPath;
      }
    });
  }

  // Método para comprobar si un enlace está activo
  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
