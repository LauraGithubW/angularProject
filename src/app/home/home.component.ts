import { Component, OnInit } from '@angular/core';
//Importación del Router para poder hacer redirecciones
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //Impementación de la redirección a la ruta para buscar información nutricional
  redirectMe() {
    this.router.navigate(['/nutritionalinfo']);
    console.log('redirect');
  }
  redirectToRecipes() {
    this.router.navigate(['/recipes']);
    console.log('redirect to recipes');
  }
  //Inyección de router para poder usar el objeto para hacer las redirecciones
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
